import { ScrollView, Text, Image, StyleSheet } from 'react-native';

export default function Detalhes({ route }) {
  const { receita } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: receita.strMealThumb }} style={styles.imagem} />
      <Text style={styles.nome}>{receita.strMeal}</Text>
      <Text style={styles.info}>Categoria: {receita.strCategory}</Text>
      <Text style={styles.info}>Origem: {receita.strArea}</Text>
      <Text style={styles.titulo}>Modo de preparo</Text>
      <Text style={styles.texto}>{receita.strInstructions}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#fff' },
  imagem: { width: '100%', height: 250, borderRadius: 10 },
  nome: { fontSize: 22, fontWeight: 'bold', marginTop: 15 },
  info: { fontSize: 16, marginTop: 5, color: '#555' },
  titulo: { fontSize: 18, fontWeight: 'bold', marginTop: 15 },
  texto: { fontSize: 15, marginTop: 5, marginBottom: 30, lineHeight: 22 },
});

