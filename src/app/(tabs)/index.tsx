import Box from "@/src/components/Box";
import { seedCategorias, useAppMigrations } from "@/src/database";
import { useAppDispatch, useAppSelector } from "@/src/store";
import { listCategoriaThunk } from "@/src/store/categorias/thunks";
import { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const { success } = useAppMigrations();
  const { loading, list } = useAppSelector((state) => state.categories);

  useEffect(() => {
    if (success) {
      async function init() {
        await seedCategorias();
        dispatch(listCategoriaThunk());
      }

      init();
    }
  }, [success]);

  useEffect(() => {
    console.log("Categorias atualizadas:", list);
  }, [list]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} padding={16}>
        <Text style={styles.title}>Bem Vindo</Text>
      </Box>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "medium",
  },
});
