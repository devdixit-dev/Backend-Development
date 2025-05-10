import express from 'express';
// to manage workload, we use to make clusters
import cluster from 'cluster' // to make clusters
import os from 'os' // to know how many cpu's in the system

const totalCPUs = os.cpus().length;

if (cluster.isPrimary) {
  // if my cluster primary then make worker processes according to my CPU's.
  for (let i = 0; i < totalCPUs; i++) {
    // for every cpu, need to seprate the users from server
    cluster.fork();
  }
}
// if cluster was not primary
else {
  const app = express();
  const port = 8000;

  app.get('/', (req, res) => {
    return res.json({
      CPU: `You have ${totalCPUs} number of CPU's`,
      message: `Hello from express server ${process.pid}`
    });
  });

  app.listen(port, () => {
    console.log(`Express is running on port ${port}`);
  });
}


// server is running with round-robin approach
// if server has 3 cpu's
// -------------------------------------------
// 1st user - 1st instance
// 2nd user - 2nd instance
// 3rd user - 3rd instance
// 4th user - 1st instance
// 5th user - 2nd instance
// and so... on...