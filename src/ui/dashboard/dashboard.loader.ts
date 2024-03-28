import {Params} from 'react-router-dom';
import HttpClient from '../../core/adapters/http-client.ts';
import {AuctionStatusEnum} from '../../core/types/auction.interface.ts';

export async function AuctionListDataLoader({params}: { params: Readonly<Params<string>> }) {

	let status: AuctionStatusEnum;

	switch (params.status) {
		case 'pending':
			status = AuctionStatusEnum.PENDING;
			break;
		case 'on_going':
			status = AuctionStatusEnum.ON_GOING
			break;
		case 'completed':
			status = AuctionStatusEnum.COMPLETED
			break;
		default:
			status = AuctionStatusEnum.ALL
			break
	}
//	const state = status === AuctionStatusEnum.ALL ? '' : status
	return await HttpClient.get(
		(userId) => `/user-auctions/${userId}/${status === AuctionStatusEnum.ALL ? '' : status}`);

}