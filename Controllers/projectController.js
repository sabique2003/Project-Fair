const projects=require('../Models/projectModel')

exports.addProject=async(req,res)=>{
    try{
        const {title,desc,languages,github,demo}=req.body
        const image=req.file.filename
    const userId=req.payload
    if(!title||!desc||!languages||!github||!demo||!image){
        res.status(406).json("Enter Valid Data")
    }
    else{
        const newProject=new projects({
            title,description:desc,languages,github,demo,image,userId
        })
        await newProject.save()
        res.status(200).json(newProject)
    }
}
catch(err){
    console.log(err);
    res.status(400).json(err)
    
}
}

exports.getProjectList=async(req,res)=>{
    try{
        const userId=req.payload
        const projectList=await projects.find({userId})
        res.status(200).json(projectList)
    }
    catch(err){
        console.log(err);
        res.status(400).json(err)
        
    }
}
    
exports.deleteProject=async(req,res)=>{
    try{
        const {id}=req.params
    const result = await projects.findOneAndDelete({_id:id})
    res.status(200).json(result)
    }
    catch(err){
        console.log(err);
        res.status(400).json(err)
        
    }
    
}

exports.editProject = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.payload;
    
    // Check if a new file is uploaded
    let image = req.body.image; // Fallback to existing image if no new file is uploaded
    if (req.file) {
      image = req.file.filename; // If new file is uploaded, use it
    }
    
    const { title, desc, languages, github, demo } = req.body;
    
    if (!title || !desc || !languages || !github || !demo || !image) {
      return res.status(406).json("Invalid Data");
    }

    const existing = await projects.findOne({ _id: id });
    existing.title = title;
    existing.description = desc;
    existing.languages = languages;
    existing.github = github;
    existing.demo = demo;
    existing.image = image;

    await existing.save();
    res.status(200).json(existing);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

exports.allProjects=async(req,res)=>{
    try{
        const projectlist=await projects.find()
        res.status(200).json(projectlist)
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
      }
    }