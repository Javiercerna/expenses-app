from django.db import models


class ExpenseType(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class ExpenseFinancing(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Expense(models.Model):
    name = models.CharField(max_length=120)
    date = models.DateField()
    money_pen = models.FloatField()
    money_usd = models.FloatField()
    type = models.ForeignKey(ExpenseType, on_delete=models.CASCADE)
    financing = models.ForeignKey(ExpenseFinancing, on_delete=models.CASCADE)

    def __str__(self):
        return (f'{{"name": {self.name}, "date": {self.date}, "money_pen": {self.money_pen},'
                f'"money_usd": {self.money_usd}, "type": {self.type}, "financing": {self.financing}}}')
