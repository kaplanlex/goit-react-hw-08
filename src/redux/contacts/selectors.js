import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

export const selectAllContacts = state => state.contacts.items;
export const selectFilteredContacts = createSelector(
  [selectAllContacts, selectNameFilter],
  (contacts, filter) => {
    if (!filter) return contacts;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.toLowerCase().includes(normalizedFilter)
    );
  }
);

export const selectLoading = state => state.contacts.loading;
export const selectFilter = state => state.contacts.filter;