import { useEffect, useState } from 'react';
import { View, Text, FlatList, I~[] mage, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import api from '../services/api';

export default function Home({ navigation }) {
  const [receitas, setReceitas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    api.get('/search.php?s=')
      .then((res) => setReceitas(res.data.meals || []))
      .catch((err) => console.log(err))
      .finally(() => setCarregando(false));
  }, []);

  if (carregando) {
    return (
      <View style={styles.centro}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <FlatList
      data={receitas}
      keyExtractor={(item) => item.idMeal}
      contentContainerStyle={{ padding: 10 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Detalhes', { receita: item })}
        >
          <Image source={{ uri: item.strMealThumb }} style={styles.imagem} />
          <Text style={styles.nome}>{item.strMeal}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  centro: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', marginBottom: 10, padding: 10, borderRadius: 8, elevation: 2 },
  imagem: { width: 70, height: 70, borderRadius: 8 },
  nome: { marginLeft: 12, fontSize: 16, fontWeight: 'bold', flex: 1 },
});