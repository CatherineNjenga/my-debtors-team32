# Generated by Django 4.0.6 on 2022-08-09 15:08

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('email', models.CharField(max_length=60, unique=True, verbose_name='Email Adress')),
                ('full_name', models.CharField(help_text='Enter your surname, middle name and lastname ', max_length=200, verbose_name='Full name')),
                ('last_login', models.DateTimeField(auto_now=True, verbose_name='Last Login')),
                ('date_joined', models.DateTimeField(auto_now_add=True, verbose_name='Date Joined')),
                ('schl_name', models.CharField(blank=True, help_text='Enter the school name', max_length=200, null=True, verbose_name='School Name ')),
                ('phn_no', models.CharField(max_length=100, verbose_name='Phone Number')),
                ('user_type', models.PositiveSmallIntegerField(choices=[(1, 'client'), (2, 'parent'), (3, 'student')], default=1)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'ordering': ['email'],
            },
        ),
        migrations.CreateModel(
            name='Client',
            fields=[
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('Head_master', models.CharField(help_text='Enter the name of your school principal', max_length=30, verbose_name='School Principal')),
                ('registerer', models.CharField(help_text='Enter the name of your school bursar', max_length=30, verbose_name='school bursar')),
                ('School_Ownership', models.CharField(choices=[('pu', 'Public'), ('pr', 'Private'), ('ot', 'others')], default='ot', max_length=2, verbose_name='Ownership')),
                ('School_type', models.CharField(choices=[('C', 'Creche'), ('N', 'Nursery'), ('P', 'Primary'), ('S', 'Secondary'), ('T', 'Tertiary'), ('O', 'Others')], default='o', max_length=1, verbose_name='Level of school')),
                ('abt_school', models.TextField(help_text='Tell us more about your school', max_length=1000, verbose_name='School history')),
                ('address', models.CharField(max_length=200, verbose_name='School Address')),
            ],
        ),
        migrations.CreateModel(
            name='Parent',
            fields=[
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('stud_name', models.CharField(max_length=50, verbose_name='Name of ward')),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('parent_name', models.CharField(max_length=50, verbose_name='Name of Parent')),
            ],
        ),
    ]
