import { user } from '../../../clients/prisma_client';

class UpdateStatusService {
  public status: boolean;
  public id: number;

  constructor(status: boolean, id: number) {
    this.status = status;
    this.id = id;
  }
}

export default UpdateStatusService;
