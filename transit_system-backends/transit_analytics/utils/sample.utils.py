import pandas as pd


def custom_method(self):
    return self.head()


pd.DataFrame.custom_method = custom_method


# Create a DataFrame object

df = pd.DataFrame() # args

result = df.custom_method()

# print(result)