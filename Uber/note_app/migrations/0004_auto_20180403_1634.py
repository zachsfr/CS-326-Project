# Generated by Django 2.0.2 on 2018-04-03 20:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('note_app', '0003_auto_20180329_1753'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='course_schedule',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='favorite_authors',
        ),
    ]