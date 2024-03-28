import axios from 'axios';
import {toast} from 'sonner'
import {UserInterface} from '../types/user.interface.ts';

type UrlFactory = (str?: string) => string;
export default class HttpClient {
	static serverURL = 'http://localhost:3000';
	static headers = {};
	static userId?: string;

	static axiosInstance = axios.create({
		baseURL: this.serverURL,
		headers: {},
	});

	constructor(public userMail: string) {
		HttpClient.initializeUserId()
	}

	static initializeUserId() {
		const user = localStorage.getItem('currentUser')
		if (user === null)
			return;
		this.userId = (JSON.parse(user) as UserInterface)._id;
	}

	static async get(url: string | UrlFactory): Promise<unknown> {
		if (typeof url !== 'string' && this.userId === undefined) {
			this.initializeUserId()
			return toast.error('Aucun utilisateur connecté, la requette ne peut aboutir')
		}

		const path = typeof url === 'string' ? url : url(this.userId);

		try {
			const response = await HttpClient.axiosInstance.get(this.serverURL + path);
			return Promise.resolve(response.data)
		} catch (error) {
			HttpClient.errorHandler(error as Error, path, 'GET');
		}
	}


	static async post<DataType, ResponseType>(url: string, data: DataType): Promise<ResponseType | void> {
		try {
			const response = await HttpClient.axiosInstance.post(this.serverURL + url, data);
			return Promise.resolve(response)
		} catch (error) {
			HttpClient.errorHandler(error, url, 'POST');
		}
	}

	static async patch<DataType, ResponseType>(url: string, data: DataType): Promise<ResponseType | void> {
		try {
			const response = await HttpClient.axiosInstance.patch(this.serverURL + url, data);
			return Promise.resolve(response)
		} catch (error) {
			HttpClient.errorHandler(error, url, 'PATCH');
		}
	}

	static async delete<ResponseType>(url: string): Promise<ResponseType> {
		try {
			const response = await HttpClient.axiosInstance.delete(this.serverURL + url);
			return Promise.resolve(response)
		} catch (error) {
			HttpClient.errorHandler(error, url, 'DELETE');
		}
	}

	private static errorHandler(error: Error, url: string, method: 'GET' | 'POST' | 'PATCH' | 'DELETE') {
		toast.error(error.message || 'Une erreur est survenue')
		console.info(`[${method} on ${url}] une erreur est survenue pendant la requette`, error)
	}


}
