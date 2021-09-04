def main():
    n = int(input("Digite o número de eleitores: "))

    if n <= 0:
        print("Erro. Digite um valor positivo.")
    else:

        a = 0
        b = 0
        c = 0
        nulo = 0
        branco = 0

        for i in range(0, n):
            print("\nEleitor ", i+1)
            voto = int(input("Digite o número do candidato: "))

            if voto == 1:
                a += 1
            elif voto == 2:
                b += 1
            elif voto == 3:
                c += 1
            elif voto == 9:
                nulo += 1
            elif voto == 0:
                branco += 1
            else:
                print("Voto inválido.")
                break

    if a > b and a > c:
        vencedor = "A"
    elif b > a and b > c:
        vencedor = "B"
    elif c > a and c > b:
        vencedor = "C"
    else:
        vencedor = "Não há vencedor."

    if i == n-1:
        print("\nTodal de votos para o candidato A: {}\n"
              "Total de votos para o candidato B: {}\n"
              "Total de votos para o candidato C: {}\n"
              "Total de votos nulos: {}\n"
              "Total de votos em branco: {}\n"
              "\nO vencedor da eleição: {}"
              .format(a, b, c, nulo, branco, vencedor))


main()