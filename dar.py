import os
folder_path = "./fonts/EB_Garamond"
def listaplikow(folder_path):
    # Ścieżka do folderu, którego pliki chcesz wypisać
    # Pobieramy listę wszystkich elementów w folderze
    all_items = os.listdir(folder_path)

    # Filtrowanie tylko plików (bez folderów)
    return [f for f in all_items if os.path.isfile(os.path.join(folder_path, f))]
for i in listaplikow(folder_path):
    if ".ttf" in i:
        print(f"src: url('.{folder_path}/{i}') format('truetype');")
for i in listaplikow(folder_path+"/static"):
    if ".ttf" in i:
        print(f"src: url('.{folder_path}/static/{i}') format('truetype');")

