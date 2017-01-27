export interface BookingInterface {
    bookingID: number;
    projectID: number;
    pid: number;
    auditID: number;
    initialDate: Date;
    endDate: Date;
    bookingPercentual: number;
    deleted: boolean;
}