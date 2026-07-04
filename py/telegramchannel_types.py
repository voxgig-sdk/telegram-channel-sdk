# Typed models for the TelegramChannel SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class GetChannelInfo:
    description: Optional[str] = None
    image: Optional[str] = None
    subscriber: Optional[int] = None
    title: Optional[str] = None
    url: Optional[str] = None
    username: Optional[str] = None


@dataclass
class GetChannelInfoLoadMatch:
    id: str

