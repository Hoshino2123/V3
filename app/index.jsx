import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Redirect, SplashScreen, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { images } from "../constants";
import Botao from "../components/Botao";

export default function App() {
  return (
    <>
      <SafeAreaView className="bg-primary w-full h-full">
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="w-full justify-center items-center h-full 5px">
            <Image source={images.logo} className="w-120 h-120" />

            <View
              style={{
                flex: 0.5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ flex: 0.5, marginBottom: 90 }}>
                <Botao
                  title="Criar Conta"
                  handlePress={() => router.push("/sign-up")}
                  contain1erStyles="w-full mt-7"
                />

                <View style={{ flex: 40}}>
                  <Botao
                    title="Iniciar Sessão"
                    handlePress={() => router.push("/sign-in")}
                    containerStyles="w-full mt-7 bg-secondary"
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        <StatusBar backgroundColor="black" style="light" />
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
