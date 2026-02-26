export type RegistryFlavor =
  /** https://crates.io, supports rawgit access */
  | 'crates.io'

  /** unknown, assuming private git repository */
  | 'other';

export interface RegistryInfo {
  flavor: RegistryFlavor;

  /** raw URL of the registry, as specified in cargo config */
  rawUrl: string;

  /** parsed URL of the registry */
  url: URL;

  /** whether the registry uses sparse indexing (rfc-2789) */
  isSparse: boolean;

  /** path where the registry is cloned */
  clonePath?: string;

  /**
   * The `dl` field from the index config.json.
   * See https://doc.rust-lang.org/cargo/reference/registry-index.html
   */
  configDlUrl: string;

  /**
   * The optional `api` field from the index config.json.
   * See https://doc.rust-lang.org/cargo/reference/registry-index.html
   */
  configApiUrl?: string;
}

export interface CrateRecord {
  vers: string;
  yanked: boolean;
  rust_version?: string;
  pubtime?: string;
}

export interface CrateMetadata {
  description: string | null;
  documentation: string | null;
  homepage: string | null;
  repository: string | null;
}
