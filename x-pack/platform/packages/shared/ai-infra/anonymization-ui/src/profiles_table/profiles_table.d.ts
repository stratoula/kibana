import React from 'react';
import { type AnonymizationProfile } from '@kbn/anonymization-common';
interface ProfilesTableProps {
    profiles: AnonymizationProfile[];
    loading: boolean;
    total: number;
    page: number;
    perPage: number;
    isManageMode: boolean;
    dataViewTitlesById?: Record<string, string>;
    onPageChange: (page: number, size: number) => void;
    onEditProfile: (profile: AnonymizationProfile) => void;
    onDeleteProfile: (profileId: string) => void;
}
export declare const ProfilesTable: ({ profiles, loading, total, page, perPage, isManageMode, dataViewTitlesById, onPageChange, onEditProfile, onDeleteProfile, }: ProfilesTableProps) => React.JSX.Element;
export {};
