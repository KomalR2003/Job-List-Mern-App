import job from "../models/Job.js"

export const saveJobData = async (req, res) => {
    try{
      const newJob =  new job(req.body);

      await newJob.save();
      res.status(200).json({message: "job saved successfully"});

    }catch(error){
        console.log(error.message);
        res.status(500).json({error: error.message});
    }

}

export const getJobData = async (req, res) => {
  try{
   const jobs = await job.find({});
    res.status(200).json(jobs);

  }catch(error){
      console.log(error.message);
      res.status(500).json({error: error.message});
  }

}