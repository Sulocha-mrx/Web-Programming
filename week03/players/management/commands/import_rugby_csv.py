
import csv
from pathlib import Path

from django.conf import settings
from django.core.management.base import BaseCommand
from django.db import transaction

from players.models import Player, Position


class Command(BaseCommand):
    help = "Import rugby players from CSV"

    def handle(self, *args, **kwargs):

        csv_file = Path(settings.BASE_DIR) / "data" / "rugby_players.csv"

        if not csv_file.exists():
            self.stdout.write(self.style.ERROR("CSV file not found!"))
            return

        imported = 0

        with open(csv_file, newline="", encoding="utf-8-sig") as file:
            reader = csv.DictReader(file)

            print("CSV columns:", reader.fieldnames)

            with transaction.atomic():
                for row in reader:

                    first_name = row["first_name"].strip()
                    last_name = row["last_name"].strip()
                    position_name = row["position"].strip()

                    is_specialist = (
                        row["is_specialist"].strip().lower() == "true"
                    )

                    position, created = Position.objects.get_or_create(
                        name=position_name,
                        defaults={"is_specialist": is_specialist}
                    )

                    player, created = Player.objects.get_or_create(
                        first_name=first_name,
                        last_name=last_name
                    )

                    player.positions.add(position)
                    imported += 1

        self.stdout.write(
            self.style.SUCCESS(
                f"Successfully processed {imported} player-position records!"
            )
        )
