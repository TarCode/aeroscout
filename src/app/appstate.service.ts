import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppstateService {
  jobs = [];
  workers = [];

  setJobs(jobs) {
    this.jobs = jobs;
  }

  setWorkers(workers) {
    this.workers = workers;
  }

  assignWorkerToJob(job_id, worker) {
    const job_index = this.jobs.findIndex(i => i.id === job_id);
    this.jobs[job_index]['worker'] = worker;
  }

  setComplete(job_id) {
    const job_index = this.jobs.findIndex(i => i.id === job_id);
    this.jobs[job_index]['complete'] = true;
  }
}
