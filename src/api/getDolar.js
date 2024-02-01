/**
 *  getDolar services
 *
 * @version 1.0.0 - 31-01-2023
 * @author  Matias Riquelme - m.riquelmee98@gmail.com
 * @since   1.0.0 - 07 Jul 2023
 *
 */
import axios from 'axios';
import { addList, spinnerLoad } from '../redux/dolarSlice';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';

const getDolar = () => {
  const base = import.meta.env.VITE_URL_BASE;
  const today = new Date();
  const dispatch = useDispatch();
  const thirtyDaysAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
  async function getDolars(initData = thirtyDaysAgo, endDate = today) {
    const formattedInnit = format(initData, 'dd-MM-yyyy');
    const formattedEnd = format(endDate, 'dd-MM-yyyy');
    try {
      const response = await axios.get(`${base}dolar/${formattedInnit}/${formattedEnd}`);
      const result = response.data;
      dispatch(spinnerLoad(true));
      const startIndex = result.indexOf('[');
      const endIndex = result.lastIndexOf(']');

      const arrString = result.substring(startIndex, endIndex + 1);

      // Convertir la cadena de arreglo en un array de objetos JavaScript
      const arr = JSON.parse(arrString);

      console.log('registerString', arr);
      setTimeout(() => {
          dispatch(addList(arr));
      }, 4000);
    } catch (error) {
      console.log(error, 'errror');
    }
  }

  return { getDolars };
};

export default getDolar;
