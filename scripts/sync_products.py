import csv
import json

CATEGORY_ORDER = [
    "Worm Bin Items",
    "Worm Bag",
    "Fly Control",
    "Bokashi Items",
]


def main():
    products = []
    with open("scripts/products_source.csv", newline="") as f:
        reader = csv.DictReader(f)
        for row in reader:
            item = row["Item"].strip()
            category = row["Category"]
            amazon = row["Amazon Link"].strip()
            other = row["Other Link"].strip()

            if amazon:
                primary = amazon
                secondary = other if other else None
            else:
                primary = other if other else None
                secondary = None

            products.append({
                "Item": item,
                "Category": category,
                "Amazon Link": primary,
                "Other Link": secondary,
            })

    def sort_key(p):
        cat = p["Category"]
        if cat in CATEGORY_ORDER:
            cat_order = CATEGORY_ORDER.index(cat)
        else:
            cat_order = len(CATEGORY_ORDER)
        return (cat_order, cat, p["Item"].lower())

    products.sort(key=sort_key)

    with open("src/data/products.json", "w") as f:
        json.dump(products, f, indent=4)
        f.write("\n")


if __name__ == "__main__":
    main()
