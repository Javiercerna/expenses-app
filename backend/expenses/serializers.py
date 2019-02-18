from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Expense, ExpenseFinancing, ExpenseType


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')


class ExpenseSerializer(serializers.ModelSerializer):
    type = serializers.SlugRelatedField(queryset=ExpenseType.objects.all(), slug_field='name')
    financing = serializers.SlugRelatedField(queryset=ExpenseFinancing.objects.all(), slug_field='name')

    class Meta:
        model = Expense
        fields = ('url', 'name', 'date', 'money_pen', 'money_usd', 'type', 'financing')


class ExpenseFinancingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExpenseFinancing
        fields = ('name',)


class ExpenseTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExpenseType
        fields = ('name',)
