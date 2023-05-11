import databaseConnection from "./config/database";
const port = 5000
import app from "./app/app"

app.listen(port, () => {
    databaseConnection()
    console.log(`Server is running on port ${port}`);
})

