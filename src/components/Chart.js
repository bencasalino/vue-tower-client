import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  data() {
    return {
      indoorFields: [],
      outdoorFields: []
    };
  },
  mounted() {
    const baseURL = 'http://localhost:3000/';
      fetch(baseURL, {
        method: 'GET',
      })
        .then(res => res.json())
        // eslint-disable-next-line
        .catch(error => console.error('Error:', error))
        // eslint-disable-next-line
        .then(response => {
          this.indoorFields = response.indoorfields.length;
          this.outdoorFields = response.outdoorfields.length;
          console.log('indoor', this.indoorFields, 'outdoor', this.outdoorFields);
      })
      .then(() => {
        this.renderChart(
        {
          labels: ['Indoor'],
          datasets: [
            {
              label: 'Indoor',
              backgroundColor: '#FF530D',
              data: [this.indoorFields]
            },
            {
              label: 'Outdoor',
              backgroundColor: '#05CBE1',
              data: [this.outdoorFields]
            }
          ]
        },
        { responsive: true, maintainAspectRatio: false }
      );
    });
  }
};
