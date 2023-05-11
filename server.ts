import databaseConnection from "./src/config/database";
const port = 5000
import app from "./src/app/app"

app.listen(port, () => {
    databaseConnection()
    console.log(`Server is running on port ${port}`);
})

