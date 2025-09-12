function ipv4Parser(ip, mask) {

    const ip_list = ip.split(".").map(Number);
    const mask_list = mask.split(".").map(Number);

    const network_address = [];
    const host_id = [];

    for (let i = 0; i < 4; i++) {
        const net = ip_list[i] & mask_list[i];
        const host = ip_list[i] - net;
        network_address.push(net);
        host_id.push(host);
    }

    return [
        network_address.join("."),
        host_id.join(".")
    ];
}
