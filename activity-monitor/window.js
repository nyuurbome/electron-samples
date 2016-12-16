function displayCPUTime() {

var os = require('os'); // https://nodejs.org/api/os.html

var datasets = [];

// Loop over the CPUs on the current machine
var cpus = os.cpus();
for (var i = 0; i < cpus.length; i++) {
  var cpu = cpus[i];

  var cpuData = {
    data: [
      cpu.times.user,
      cpu.times.sys,
      cpu.times.idle,
    ],
    backgroundColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)'
    ]
  };

  // Add cpu data to datasets
  datasets.push(cpuData);
  console.log(cpuData.data);
}

// Create and render the chart
var chart = new Chart($('.chart-doughnut'), {
  type: 'doughnut',
  data: {
    labels: [
      'User Time (ms)',
      'System Time (ms)',
      'Idle Time (ms)'
    ],
    datasets: datasets
  },
  options: {
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'CPU Activity',
      fontColor: 'rgb(250, 250, 250)',
      fontSize: 16
    },
    legend: {
      display: true,
      labels: {
        fontColor: 'rgb(250, 250, 250)',
        fontSize: 12
      }
    }
  }
});

}


function displayMemUsage() {

var os = require('os'); // https://nodejs.org/api/os.html

var datasets = [];

// Loop over the CPUs on the current machine
var totalMem = os.totalmem();
var freeMem = os.freemem();
var usedMem = totalMem - freeMem;

var memData = {
    data: [
      usedMem,
      freeMem
    ],
    backgroundColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)'
    ]
  };

  // Add cpu data to datasets
  datasets.push(memData);
  console.log(memData);
  console.log('used: ' + usedMem + ', free: ' + freeMem + ', total: ' + totalMem);


// Create and render the chart
var chart = new Chart($('.chart-pie'), {
  type: 'pie',
  data: {
    labels: [
      'Used (bytes)',
      'Free (bytes)'
    ],
    datasets: datasets
  },
  options: {
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Memory Usage',
      fontColor: 'rgb(250, 250, 250)',
      fontSize: 16
    },
    legend: {
      display: true,
      labels: {
        fontColor: 'rgb(250, 250, 250)',
        fontSize: 12
      }
    }
  }
});

}



// Run this function after the page has loaded, refresh every 1sec
var cpuWindowRefresh = setInterval("displayCPUTime()", 1000);
var memoryWindowRefresh = setInterval("displayMemUsage()", 1000);
