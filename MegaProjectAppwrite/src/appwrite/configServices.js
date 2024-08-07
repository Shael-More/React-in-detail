import conf from '../conf/conf';
import { Client, ID, Databases, Storage, Query } from 'appwrite';

export class Services {
  client = new Client();
  databases;
  storage; // means bucket

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  //   services
  async createPost({ title, slug, content, featuredImage, status, userID }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userID,
        }
      );
    } catch (error) {
      console.log('Appwrite service :: createPost :: error', error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log('Appwrite servive :: updatePost :: error', error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log('Appwrite servive :: deletePost :: error', error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log('Appwrite servive :: getPost :: error', error);
      return false;
    }
  }

  async getAllPosts(queries = [Query.equal('status', 'active')]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log('Appwrite servive :: getAllPosts:: error', error);
      return false;
    }
  }

  //   file upload services/Method

  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log('Appwrite servive :: uploadFile :: error', error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
        await this.storage.deleteFile(
            conf.appwriteBucketId,
            fileId
        )
        return true
    } catch (error) {
        console.log('Appwrite servive :: deleteFile :: error', error);
        return false;
    }
  }

  getFilePreview(fileId) {
    return this.storage.getFilePreview(
        conf.appwriteBucketId,
        fileId
    )
  }
}

const service = new Services();
export default service;
