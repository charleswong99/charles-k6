import { sleep } from 'k6'
import http from 'k6/http'

export const options = {
    vus: 1,
    duration: '30s'
}
export default function () {
    http.get('https://quickpizza.grafana.com/test.k6.io');
    sleep(1);
    // http.get('https://quickpizza.grafana.com/contacts.php');
    // sleep(2)
}

