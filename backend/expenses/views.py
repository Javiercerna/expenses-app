from django.contrib.auth.models import User, Group
from django.shortcuts import render
from rest_framework import viewsets
from .models import Expense, ExpenseFinancing, ExpenseType
from .serializers import UserSerializer, GroupSerializer, ExpenseSerializer, \
                            ExpenseFinancingSerializer, ExpenseTypeSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class ExpenseViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Expense.objects.all().order_by('date')
    serializer_class = ExpenseSerializer


class ExpenseFinancingViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = ExpenseFinancing.objects.all().order_by('name')
    serializer_class = ExpenseFinancingSerializer


class ExpenseTypeViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = ExpenseType.objects.all().order_by('name')
    serializer_class = ExpenseTypeSerializer


def index(request):
    return render(request, 'expenses/dashboard.html')
