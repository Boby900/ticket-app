import mongoose, {Schema} from "mongoose";
import { ST } from "next/dist/shared/lib/utils";

mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise

const ticketSchema = new Schema(
    {
        title: String,
        description: String,
        category: String,
        priority: Number,
        status: String,
        progress: String,
        active: Boolean
    },
    {
        timestamps: true
    }
)

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);
export default Ticket