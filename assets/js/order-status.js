function get_aftership_show_order_status() {
	var data = [
        {
            "status": "processing",
            "name": "Processing",
            "type": "default"
        },
        {
            "status": "completed",
            "name": "Completed",
            "type": "default"
        },
        {
            "status": "partial-shipped",
            "name": "Partially Shipped",
            "type": "default"
        },
        {
            "status": "on-hold",
            "name": "On Hold",
            "type": "default"
        },
        {
            "status": "cancelled",
            "name": "Cancelled",
            "type": "default"
        },
        {
            "status": "refunded",
            "name": "Refunded",
            "type": "default"
        },
        {
            "status": "failed",
            "name": "Failed",
            "type": "default"
        }
    ];
	return data;
}
