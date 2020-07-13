import React from 'react';
import { View, Text } from 'react-native';

// tip isim = veri;
//değişken  tipleri: let - const(ant)
//veri tipleri : string, int, float, boolean, array, json
//javascript string ' ile tanımlanır "asd" => 'asd'


class Nurettin extends React.Component {
  render() {
    const boyut = 20;

    const satirlar = [];
    /*
    for (let i = 0; i <= boyut; i++) {
      satirlar[i] = '';

      for (let j = 0; j <= i; j++) satirlar[i] += '*';
    }
    */

    let i = 0;
    for (i; i <= boyut; i++) {
      satirlar[i] = '';

      for (let j = 0; j <= boyut - i; j++) satirlar[i] += '-';
      for (let j = 0; j <= 2 * i; j++) satirlar[i] += '*';
    }

    satirlar.forEach(s => console.log(s));

    return <Text></Text>;
  }
}

export default Nurettin;

/*
0 1 4     *
1 3 3    ***
2 5 2   *****
3 7 1  *******
4 9 0 *********
*/