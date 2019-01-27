from django.contrib import admin
from .models import ExpenseType, ExpenseFinancing, Expense


class ExpenseTypeAdmin(admin.ModelAdmin):
    list_display = ('name',)


class ExpenseFinancingAdmin(admin.ModelAdmin):
    list_display = ('name',)


class ExpenseAdmin(admin.ModelAdmin):
    list_display = ('name', 'date', 'money_pen', 'money_usd', 'type', 'financing')


admin.site.register(ExpenseType, ExpenseTypeAdmin)
admin.site.register(ExpenseFinancing, ExpenseFinancingAdmin)
admin.site.register(Expense, ExpenseAdmin)
