import express from "express"
const PORT = process.env.PORT || 4040;

const app = express();
app.use(express.json());

app.post("*", async (req,res) => {
    res.send("Bhut bhura hua bro : POST")
});

app.get("*", async(req,res) => {
    res.send("Bhut bhura hua bro : GET")
})




app.listen(PORT, (err) => {
    if(err) console.log(err);
    console.log(`Server is up and runnin http://localhost:${PORT}`);
})