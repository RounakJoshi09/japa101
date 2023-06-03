import { db } from "@/helpers/api/db";

export default function handler(req, res) {
    if (req.method === 'POST') {
        db.initialize();
        res.status(200).json({ name: 'John Doe' }); 
    } else {
   
    }
  }