import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppstateService {
  jobs = [];

  setJobs(jobs) {
    this.jobs = jobs;
  }

  setWorker(job_id, worker) {
    const job_index = this.jobs.findIndex(i => i.id === job_id);
    this.jobs[job_index]['worker'] = worker;
  }

  setComplete(job_id) {
    const job_index = this.jobs.findIndex(i => i.id === job_id);
    this.jobs[job_index]['complete'] = true;
  }
}
