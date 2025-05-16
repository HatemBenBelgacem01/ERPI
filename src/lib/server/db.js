import { MongoClient, ObjectId } from 'mongodb';
import { DB_URI } from '$env/static/private';

const client = new MongoClient(DB_URI);
await client.connect();
const db = client.db('ERPI');


// Mitarbeiterübersicht
// Mitarbeiterliste
export async function getMitarbeiter() {
    try {
        const collection = db.collection('Mitarbeiter');
        const mitarbeiter = await collection.find({}).toArray();
        
        // Convert ObjectId to string for each artist
        return mitarbeiter.map(mitarbeiter => {
            return {
                ...mitarbeiter,
                _id: mitarbeiter._id.toString()
            };
        });
    } catch (error) {
        console.error('Error fetching artists:', error);
        return []; // Return empty array on error
    }
}

// CreateMitarbieter
export async function createMitarbeiter(mitarbeiter){
    try {
        const collection = db.collection('Mitarbeiter');
        const result = await collection.insertOne(mitarbeiter);
        return getMitarbeiter();;
    } catch (error) {
        console.error('Error creating artist:', error);
        return null; // Return null on error
    }
}

// DeleteMitarbieter
export async function deleteMitarbeiter(id){
    const collection = db.collection("Mitarbeiter");
    const result = await collection.deleteOne({_id: new ObjectId(id)})
    return result.deletedCount ===1;
}

// Auftragsübersicht
// Auftragsliste
export async function getAuftrag(filter = {}){
    try {
        const collection = db.collection('Aufträge');
        const auftrag = await collection.find(filter)
            .sort({lieferdatum: -1})
            .toArray();

        return auftrag.map(auftrag => {
            return {
                ...auftrag,
                _id: auftrag._id.toString()
            };
        });
    } catch (error){
        return [];
    }
}

// CreateAuftrag
export async function createAuftrag(auftrag){
    try {
        const collection = db.collection('Aufträge');
        const result = await collection.insertOne(auftrag);
        return getAuftrag();;
    } catch (error) {
        console.error('Error creating artist:', error);
        return null; // Return null on error
    }
}

// UpdateAuftrag
export async function updateAuftrag(id, updateData) {
    try {
        const collection = db.collection('Aufträge');
        // Entfernen des _id Feldes falls vorhanden, da es nicht geupdated werden darf
        delete updateData._id;
        
        const result = await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: updateData }
        );
        
        return result.modifiedCount === 1;
    } catch (error) {
        console.error('Error updating auftrag:', error);
        return false;
    }
}

// Newsübersicht
// Newsliste
export async function getNews(){
    try {
        const collection = db.collection('News');
        const news = await collection.find({}).toArray();

        return news.map(news => {
            return {
                ...news,
                _id: news._id.toString()
            };
        });
    } catch (error){
        return [];
    }
}