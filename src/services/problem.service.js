const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService{

    constructor(problemRepository){
        this.problemRepository = problemRepository;     
    }
   
    async createProblem(problemData){
        console.log("inside probelm service");
        try {
            //sanatize the markdown
            problemData.description=sanitizeMarkdownContent(problemData.description);
            const problem=await this.problemRepository.createProblem(problemData);
            console.log("probelm created", problem);
            return problem;   
        } catch (error) {
            console.log(error);
            throw error;
        }
        

    }
} 
 
module.exports = ProblemService;