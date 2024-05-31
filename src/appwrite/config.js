import { Client, Databases, ID } from 'appwrite';
import conf from '@/conf/conf'

export class Service {
    client = new Client
    databases

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
    }

    getList() {
        return this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId
        )
    }

    async addId({ body }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(),
                { body }
            )
        } catch (error) {
            console.log("Error in addId:", error);
        }
    }

    async deleteId(id) {
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                id
            )
        } catch (error) {
            console.log("Error in deleteId:", error);
        }
    }
}

const service = new Service
export default service