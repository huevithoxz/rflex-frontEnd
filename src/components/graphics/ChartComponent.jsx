import React, { useEffect, useRef, useState } from 'react';
import { createChart } from 'lightweight-charts';

const ChartComponent = (data) => {
  const chartContainerRef = useRef(null);
  const [activeTheme, setActiveTheme] = useState('Dark');
 
  // Creamos un nuevo objeto extrayendo los valores del arreglo original
const nuevoObjeto = data.data.map(item => ({ time: item.date, value: Number(item.value) }));
console.log('data',nuevoObjeto
)

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: 600,
      height: 300,
      rightPriceScale: {
        borderVisible: false,
      },
      timeScale: {
        borderVisible: false,
      },
    });

    const areaSeries = chart.addAreaSeries({
      topColor: 'rgba(33, 150, 243, 0.56)',
      bottomColor: 'rgba(33, 150, 243, 0.04)',
      lineColor: 'rgba(33, 150, 243, 1)',
      lineWidth: 2,
    });

    const darkTheme = {
      chart: {
        layout: {
          background: {
            type: 'solid',
            color: '#2B2B43',
          },
          lineColor: '#2B2B43',
          textColor: '#D9D9D9',
        },
        watermark: {
          color: 'rgba(0, 0, 0, 0)',
        },
        crosshair: {
          color: '#758696',
        },
        grid: {
          vertLines: {
            color: '#2B2B43',
          },
          horzLines: {
            color: '#363C4E',
          },
        },
      },
      series: {
        topColor: 'rgba(32, 226, 47, 0.56)',
        bottomColor: 'rgba(32, 226, 47, 0.04)',
        lineColor: 'rgba(32, 226, 47, 1)',
      },
    };

    const themesData = {
      Dark: darkTheme,
    };

    function syncToTheme(theme) {
      chart.applyOptions(themesData[theme].chart);
      areaSeries.applyOptions(themesData[theme].series);
    }

    syncToTheme(activeTheme);

    nuevoObjeto.sort((a, b) => {
      // Convertir las fechas a objetos Date para que se puedan comparar
      const dateA = new Date(a.time);
      const dateB = new Date(b.time);
    
      // Comparar las fechas y devolver el resultado
      return dateA - dateB;
    });

    areaSeries.setData(nuevoObjeto);

    return () => {
      chart.remove();
    };
  }, [activeTheme]);

  const handleThemeChange = (theme) => {
    setActiveTheme(theme);
  };

  return (
    <div>
      <div ref={chartContainerRef}></div>
    </div>
  );
};

export default ChartComponent;
