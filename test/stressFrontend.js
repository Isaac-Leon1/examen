import { sleep } from 'k6';
import http from 'k6/http';

export let options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '30s', target: 20 },
    { duration: '10s', target: 0 }, 
  ],
};

export default function() {
  let url = 'https://medi-lab-examen.netlify.app/login'
  let res = http.get(url);

  if (res.status !== 200) {
    console.error(`Error: Código de estado HTTP ${res.status} no es 200`);
  }

  if (res.timings.duration > 1000) {
    console.error(`Error: Tiempo de respuesta ${res.timings.duration}ms es mayor a 1 segundo`);
  }

  sleep(2)
}