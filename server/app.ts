import express from 'express';
import cors from 'cors';
import { Request, Response, Application } from 'express';
import { readFile,writeFile } from 'fs/promises';

interface IPuppy {
  id: number,
  breed_name: string,
  pet_name: string,
  age: number,
  gender: string,
  icon_url:string
}


const app: Application = express();
app.use(express.json());
app.use(cors());

const filePath = './data/Puppies.json';

const readFileData = async (filePath : string) =>{
    const data = await readFile(filePath);
    const stringData = data.toString();
    const puppiesData = JSON.parse(stringData);
    return puppiesData;
}

app.get('/api/test', (_req: Request, res: Response) => {
  return res.status(200).json({ test: 'is working as it should' });
});


app.get('/api/puppies', async (_req: Request, res: Response) => {

  const puppies = await readFileData(filePath);
  return res.status(200).json(puppies);
});

app.get('/api/puppies/:id', async (_req: Request, res: Response) => {
  const puppies = await readFileData(filePath);
  const puppy = puppies.find( (p:IPuppy) =>p.id === Number.parseInt(_req.params.id as string));

  if(!puppy){
    return res.status(404).json({message:"Puppy not found"});
  }
  return res.status(200).json(puppy);
});

app.post('/api/puppies', async (_req: Request, res: Response) => {
  
  const newPuppy: IPuppy = {
    id: Date.now(),
    breed_name: _req.body.breed_name,
    pet_name: _req.body.pet_name,
    age: _req.body.age,
    gender: _req.body.gender,
    icon_url:_req.body.icon_url
  }

  console.log(newPuppy)
  const puppies = await readFileData(filePath);

  puppies.push(newPuppy);

  await writeFile(filePath,JSON.stringify(puppies));
  
  return res.status(200).json(newPuppy);
});

app.delete('/api/puppies/:id', async (_req: Request, res: Response) => {
   
  const puppies = await readFileData(filePath);

  const puppyIndex = puppies.findIndex((p : IPuppy) => p.id === Number.parseInt(_req.params.id as string));

  if(puppyIndex >= 0){
    puppies.splice(puppyIndex,1);

    await writeFile(filePath,JSON.stringify(puppies));

    return res.status(204).json({message:"Puppy is deleted"});
  }

  return res.status(404).json({message:"unable to delete the puppy"});
});

app.put('/api/puppies/:id', async (_req: Request, res: Response) => {

  const puppies = await readFileData(filePath);

  const updatePuppy = puppies.find( (p:IPuppy) =>p.id === Number.parseInt(_req.params.id as string));
  
  if(!updatePuppy){
    return res.status(404).json({message: "No puppy found with the Id"});
  }

    updatePuppy.breed_name = _req.body.breed_name
    updatePuppy.pet_name =_req.body.pet_name
    updatePuppy.age =_req.body.age
    updatePuppy.gender = _req.body.gender
    updatePuppy.icon_url = _req.body.icon_url

  await writeFile(filePath,JSON.stringify(puppies));

  console.log(updatePuppy);
  
  return res.status(200).json(updatePuppy);
});


export default app;
