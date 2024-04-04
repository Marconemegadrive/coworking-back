export class StatusCliente {

    id: Number;
    statusCliente: String;

    constructor(id: Number, statusCliente: String) {
        this.id = id;
        this.statusCliente = statusCliente;

    }

    getIdStatus() {
        return this.id;
    }

    getStatusCliente() {
        return this.statusCliente;
    }

    setIdStatus(id: Number): void {
        this.id = id;
    }

    steStatusCliente(statusCliente: String): void {
        this.statusCliente = statusCliente;
    }

}