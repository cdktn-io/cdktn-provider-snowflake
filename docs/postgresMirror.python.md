# `postgresMirror` Submodule <a name="`postgresMirror` Submodule" id="@cdktn/provider-snowflake.postgresMirror"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresMirror <a name="PostgresMirror" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror snowflake_postgres_mirror}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer"></a>

```python
from cdktn_provider_snowflake import postgres_mirror

postgresMirror.PostgresMirror(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  postgres_database: str,
  postgres_instance: str,
  target_database: str,
  drop_target_database_on_destroy: bool | IResolvable = None,
  external_volume: str = None,
  id: str = None,
  postgres_schemas: typing.List[str] = None,
  postgres_tables: typing.List[str] = None,
  refresh_interval: PostgresMirrorRefreshInterval = None,
  target_table_type: str = None,
  timeouts: PostgresMirrorTimeouts = None,
  warehouse: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the name of the mirror. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.postgresDatabase">postgres_database</a></code> | <code>str</code> | Specifies the source database on the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.postgresInstance">postgres_instance</a></code> | <code>str</code> | Specifies the source Postgres instance (case-sensitive). The role used by the provider must own the instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.targetDatabase">target_database</a></code> | <code>str</code> | Specifies the Snowflake database the mirror creates and keeps up to date. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.dropTargetDatabaseOnDestroy">drop_target_database_on_destroy</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `true`) Specifies whether destroying the mirror also drops its target database. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.externalVolume">external_volume</a></code> | <code>str</code> | Specifies the external volume for Iceberg target tables. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#id PostgresMirror#id}. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.postgresSchemas">postgres_schemas</a></code> | <code>typing.List[str]</code> | Specifies the source schemas to mirror. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.postgresTables">postgres_tables</a></code> | <code>typing.List[str]</code> | Specifies the source tables to mirror, as schema-qualified names (`schema.table`) written the way `DESCRIBE_MIRROR` returns them: unquoted and lowercase, except for parts Postgres requires to be quoted, such as `public."MixedCase"`. Other spellings of the same table show as a change on every plan. Tables are added and removed in place, without copying the other tables again. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.refreshInterval">refresh_interval</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval">PostgresMirrorRefreshInterval</a></code> | refresh_interval block. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.targetTableType">target_table_type</a></code> | <code>str</code> | Specifies the format of the target tables. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts">PostgresMirrorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.warehouse">warehouse</a></code> | <code>str</code> | Specifies the warehouse the mirror's apply task runs on. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.name"></a>

- *Type:* str

Specifies the name of the mirror.

It must be unique across all Postgres instances in the account. Snowflake stores the name lowercased, and the lowercased name is the resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#name PostgresMirror#name}

---

##### `postgres_database`<sup>Required</sup> <a name="postgres_database" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.postgresDatabase"></a>

- *Type:* str

Specifies the source database on the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#postgres_database PostgresMirror#postgres_database}

---

##### `postgres_instance`<sup>Required</sup> <a name="postgres_instance" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.postgresInstance"></a>

- *Type:* str

Specifies the source Postgres instance (case-sensitive). The role used by the provider must own the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#postgres_instance PostgresMirror#postgres_instance}

---

##### `target_database`<sup>Required</sup> <a name="target_database" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.targetDatabase"></a>

- *Type:* str

Specifies the Snowflake database the mirror creates and keeps up to date.

The database must not exist yet, and Snowflake uppercases its name. The mirror protects the database, so do not manage it with `snowflake_database`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#target_database PostgresMirror#target_database}

---

##### `drop_target_database_on_destroy`<sup>Optional</sup> <a name="drop_target_database_on_destroy" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.dropTargetDatabaseOnDestroy"></a>

- *Type:* bool | cdktn.IResolvable

(Default: `true`) Specifies whether destroying the mirror also drops its target database.

A kept target database can never be the target of a mirror again, so with `false`, a replacement that keeps the same `target_database` fails. A kept target database stays owned by the `SNOWFLAKE` application. To manage or drop it, first transfer its ownership with `GRANT OWNERSHIP ON DATABASE`, which needs the `MANAGE GRANTS` privilege.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#drop_target_database_on_destroy PostgresMirror#drop_target_database_on_destroy}

---

##### `external_volume`<sup>Optional</sup> <a name="external_volume" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.externalVolume"></a>

- *Type:* str

Specifies the external volume for Iceberg target tables.

Valid only with `target_table_type = "ICEBERG"`. When not set, the tables use Snowflake-managed storage. Grant `USAGE` on the volume to `APPLICATION SNOWFLAKE` first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#external_volume PostgresMirror#external_volume}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#id PostgresMirror#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `postgres_schemas`<sup>Optional</sup> <a name="postgres_schemas" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.postgresSchemas"></a>

- *Type:* typing.List[str]

Specifies the source schemas to mirror.

Every current and future table in them is included. Schema names are literal and case-sensitive, written without Postgres quoting, such as `MixedCase` rather than `"MixedCase"`. Schemas are added and removed in place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#postgres_schemas PostgresMirror#postgres_schemas}

---

##### `postgres_tables`<sup>Optional</sup> <a name="postgres_tables" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.postgresTables"></a>

- *Type:* typing.List[str]

Specifies the source tables to mirror, as schema-qualified names (`schema.table`) written the way `DESCRIBE_MIRROR` returns them: unquoted and lowercase, except for parts Postgres requires to be quoted, such as `public."MixedCase"`. Other spellings of the same table show as a change on every plan. Tables are added and removed in place, without copying the other tables again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#postgres_tables PostgresMirror#postgres_tables}

---

##### `refresh_interval`<sup>Optional</sup> <a name="refresh_interval" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.refreshInterval"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval">PostgresMirrorRefreshInterval</a>

refresh_interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#refresh_interval PostgresMirror#refresh_interval}

---

##### `target_table_type`<sup>Optional</sup> <a name="target_table_type" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.targetTableType"></a>

- *Type:* str

Specifies the format of the target tables.

When not set, Snowflake uses `SNOWFLAKE`. Valid values are (case-insensitive): `SNOWFLAKE` | `ICEBERG`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#target_table_type PostgresMirror#target_table_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts">PostgresMirrorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#timeouts PostgresMirror#timeouts}

---

##### `warehouse`<sup>Optional</sup> <a name="warehouse" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.warehouse"></a>

- *Type:* str

Specifies the warehouse the mirror's apply task runs on.

When not set, the task runs on serverless compute. Snowflake uppercases the name, so the warehouse itself must have an uppercase name; the case used in the configuration does not matter. Grant `USAGE` on the warehouse to `APPLICATION SNOWFLAKE` first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#warehouse PostgresMirror#warehouse}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.putRefreshInterval">put_refresh_interval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetDropTargetDatabaseOnDestroy">reset_drop_target_database_on_destroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetExternalVolume">reset_external_volume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetPostgresSchemas">reset_postgres_schemas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetPostgresTables">reset_postgres_tables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetRefreshInterval">reset_refresh_interval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetTargetTableType">reset_target_table_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetWarehouse">reset_warehouse</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_refresh_interval` <a name="put_refresh_interval" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.putRefreshInterval"></a>

```python
def put_refresh_interval(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None,
  seconds: typing.Union[int, float] = None
) -> None
```

###### `hours`<sup>Optional</sup> <a name="hours" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.putRefreshInterval.parameter.hours"></a>

- *Type:* typing.Union[int, float]

Specifies the refresh interval in hours. (conflicts with `minutes` and `seconds`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#hours PostgresMirror#hours}

---

###### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.putRefreshInterval.parameter.minutes"></a>

- *Type:* typing.Union[int, float]

Specifies the refresh interval in minutes. (conflicts with `hours` and `seconds`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#minutes PostgresMirror#minutes}

---

###### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.putRefreshInterval.parameter.seconds"></a>

- *Type:* typing.Union[int, float]

Specifies the refresh interval in seconds. (conflicts with `hours` and `minutes`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#seconds PostgresMirror#seconds}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#create PostgresMirror#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#delete PostgresMirror#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#read PostgresMirror#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#update PostgresMirror#update}.

---

##### `reset_drop_target_database_on_destroy` <a name="reset_drop_target_database_on_destroy" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetDropTargetDatabaseOnDestroy"></a>

```python
def reset_drop_target_database_on_destroy() -> None
```

##### `reset_external_volume` <a name="reset_external_volume" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetExternalVolume"></a>

```python
def reset_external_volume() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_postgres_schemas` <a name="reset_postgres_schemas" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetPostgresSchemas"></a>

```python
def reset_postgres_schemas() -> None
```

##### `reset_postgres_tables` <a name="reset_postgres_tables" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetPostgresTables"></a>

```python
def reset_postgres_tables() -> None
```

##### `reset_refresh_interval` <a name="reset_refresh_interval" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetRefreshInterval"></a>

```python
def reset_refresh_interval() -> None
```

##### `reset_target_table_type` <a name="reset_target_table_type" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetTargetTableType"></a>

```python
def reset_target_table_type() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_warehouse` <a name="reset_warehouse" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetWarehouse"></a>

```python
def reset_warehouse() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a PostgresMirror resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isConstruct"></a>

```python
from cdktn_provider_snowflake import postgres_mirror

postgresMirror.PostgresMirror.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import postgres_mirror

postgresMirror.PostgresMirror.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import postgres_mirror

postgresMirror.PostgresMirror.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import postgres_mirror

postgresMirror.PostgresMirror.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a PostgresMirror resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PostgresMirror to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PostgresMirror that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PostgresMirror to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList">PostgresMirrorDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.refreshInterval">refresh_interval</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference">PostgresMirrorRefreshIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference">PostgresMirrorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.dropTargetDatabaseOnDestroyInput">drop_target_database_on_destroy_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.externalVolumeInput">external_volume_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresDatabaseInput">postgres_database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresInstanceInput">postgres_instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresSchemasInput">postgres_schemas_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresTablesInput">postgres_tables_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.refreshIntervalInput">refresh_interval_input</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval">PostgresMirrorRefreshInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.targetDatabaseInput">target_database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.targetTableTypeInput">target_table_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts">PostgresMirrorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.warehouseInput">warehouse_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.dropTargetDatabaseOnDestroy">drop_target_database_on_destroy</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.externalVolume">external_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresDatabase">postgres_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresInstance">postgres_instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresSchemas">postgres_schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresTables">postgres_tables</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.targetDatabase">target_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.targetTableType">target_table_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.warehouse">warehouse</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.describeOutput"></a>

```python
describe_output: PostgresMirrorDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList">PostgresMirrorDescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `refresh_interval`<sup>Required</sup> <a name="refresh_interval" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.refreshInterval"></a>

```python
refresh_interval: PostgresMirrorRefreshIntervalOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference">PostgresMirrorRefreshIntervalOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.timeouts"></a>

```python
timeouts: PostgresMirrorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference">PostgresMirrorTimeoutsOutputReference</a>

---

##### `drop_target_database_on_destroy_input`<sup>Optional</sup> <a name="drop_target_database_on_destroy_input" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.dropTargetDatabaseOnDestroyInput"></a>

```python
drop_target_database_on_destroy_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `external_volume_input`<sup>Optional</sup> <a name="external_volume_input" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.externalVolumeInput"></a>

```python
external_volume_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `postgres_database_input`<sup>Optional</sup> <a name="postgres_database_input" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresDatabaseInput"></a>

```python
postgres_database_input: str
```

- *Type:* str

---

##### `postgres_instance_input`<sup>Optional</sup> <a name="postgres_instance_input" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresInstanceInput"></a>

```python
postgres_instance_input: str
```

- *Type:* str

---

##### `postgres_schemas_input`<sup>Optional</sup> <a name="postgres_schemas_input" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresSchemasInput"></a>

```python
postgres_schemas_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `postgres_tables_input`<sup>Optional</sup> <a name="postgres_tables_input" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresTablesInput"></a>

```python
postgres_tables_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `refresh_interval_input`<sup>Optional</sup> <a name="refresh_interval_input" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.refreshIntervalInput"></a>

```python
refresh_interval_input: PostgresMirrorRefreshInterval
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval">PostgresMirrorRefreshInterval</a>

---

##### `target_database_input`<sup>Optional</sup> <a name="target_database_input" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.targetDatabaseInput"></a>

```python
target_database_input: str
```

- *Type:* str

---

##### `target_table_type_input`<sup>Optional</sup> <a name="target_table_type_input" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.targetTableTypeInput"></a>

```python
target_table_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | PostgresMirrorTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts">PostgresMirrorTimeouts</a>

---

##### `warehouse_input`<sup>Optional</sup> <a name="warehouse_input" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.warehouseInput"></a>

```python
warehouse_input: str
```

- *Type:* str

---

##### `drop_target_database_on_destroy`<sup>Required</sup> <a name="drop_target_database_on_destroy" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.dropTargetDatabaseOnDestroy"></a>

```python
drop_target_database_on_destroy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `external_volume`<sup>Required</sup> <a name="external_volume" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.externalVolume"></a>

```python
external_volume: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `postgres_database`<sup>Required</sup> <a name="postgres_database" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresDatabase"></a>

```python
postgres_database: str
```

- *Type:* str

---

##### `postgres_instance`<sup>Required</sup> <a name="postgres_instance" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresInstance"></a>

```python
postgres_instance: str
```

- *Type:* str

---

##### `postgres_schemas`<sup>Required</sup> <a name="postgres_schemas" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresSchemas"></a>

```python
postgres_schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `postgres_tables`<sup>Required</sup> <a name="postgres_tables" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresTables"></a>

```python
postgres_tables: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_database`<sup>Required</sup> <a name="target_database" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.targetDatabase"></a>

```python
target_database: str
```

- *Type:* str

---

##### `target_table_type`<sup>Required</sup> <a name="target_table_type" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.targetTableType"></a>

```python
target_table_type: str
```

- *Type:* str

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.warehouse"></a>

```python
warehouse: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresMirrorConfig <a name="PostgresMirrorConfig" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import postgres_mirror

postgresMirror.PostgresMirrorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  postgres_database: str,
  postgres_instance: str,
  target_database: str,
  drop_target_database_on_destroy: bool | IResolvable = None,
  external_volume: str = None,
  id: str = None,
  postgres_schemas: typing.List[str] = None,
  postgres_tables: typing.List[str] = None,
  refresh_interval: PostgresMirrorRefreshInterval = None,
  target_table_type: str = None,
  timeouts: PostgresMirrorTimeouts = None,
  warehouse: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.name">name</a></code> | <code>str</code> | Specifies the name of the mirror. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.postgresDatabase">postgres_database</a></code> | <code>str</code> | Specifies the source database on the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.postgresInstance">postgres_instance</a></code> | <code>str</code> | Specifies the source Postgres instance (case-sensitive). The role used by the provider must own the instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.targetDatabase">target_database</a></code> | <code>str</code> | Specifies the Snowflake database the mirror creates and keeps up to date. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.dropTargetDatabaseOnDestroy">drop_target_database_on_destroy</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `true`) Specifies whether destroying the mirror also drops its target database. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.externalVolume">external_volume</a></code> | <code>str</code> | Specifies the external volume for Iceberg target tables. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#id PostgresMirror#id}. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.postgresSchemas">postgres_schemas</a></code> | <code>typing.List[str]</code> | Specifies the source schemas to mirror. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.postgresTables">postgres_tables</a></code> | <code>typing.List[str]</code> | Specifies the source tables to mirror, as schema-qualified names (`schema.table`) written the way `DESCRIBE_MIRROR` returns them: unquoted and lowercase, except for parts Postgres requires to be quoted, such as `public."MixedCase"`. Other spellings of the same table show as a change on every plan. Tables are added and removed in place, without copying the other tables again. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.refreshInterval">refresh_interval</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval">PostgresMirrorRefreshInterval</a></code> | refresh_interval block. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.targetTableType">target_table_type</a></code> | <code>str</code> | Specifies the format of the target tables. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts">PostgresMirrorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.warehouse">warehouse</a></code> | <code>str</code> | Specifies the warehouse the mirror's apply task runs on. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name of the mirror.

It must be unique across all Postgres instances in the account. Snowflake stores the name lowercased, and the lowercased name is the resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#name PostgresMirror#name}

---

##### `postgres_database`<sup>Required</sup> <a name="postgres_database" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.postgresDatabase"></a>

```python
postgres_database: str
```

- *Type:* str

Specifies the source database on the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#postgres_database PostgresMirror#postgres_database}

---

##### `postgres_instance`<sup>Required</sup> <a name="postgres_instance" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.postgresInstance"></a>

```python
postgres_instance: str
```

- *Type:* str

Specifies the source Postgres instance (case-sensitive). The role used by the provider must own the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#postgres_instance PostgresMirror#postgres_instance}

---

##### `target_database`<sup>Required</sup> <a name="target_database" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.targetDatabase"></a>

```python
target_database: str
```

- *Type:* str

Specifies the Snowflake database the mirror creates and keeps up to date.

The database must not exist yet, and Snowflake uppercases its name. The mirror protects the database, so do not manage it with `snowflake_database`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#target_database PostgresMirror#target_database}

---

##### `drop_target_database_on_destroy`<sup>Optional</sup> <a name="drop_target_database_on_destroy" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.dropTargetDatabaseOnDestroy"></a>

```python
drop_target_database_on_destroy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

(Default: `true`) Specifies whether destroying the mirror also drops its target database.

A kept target database can never be the target of a mirror again, so with `false`, a replacement that keeps the same `target_database` fails. A kept target database stays owned by the `SNOWFLAKE` application. To manage or drop it, first transfer its ownership with `GRANT OWNERSHIP ON DATABASE`, which needs the `MANAGE GRANTS` privilege.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#drop_target_database_on_destroy PostgresMirror#drop_target_database_on_destroy}

---

##### `external_volume`<sup>Optional</sup> <a name="external_volume" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.externalVolume"></a>

```python
external_volume: str
```

- *Type:* str

Specifies the external volume for Iceberg target tables.

Valid only with `target_table_type = "ICEBERG"`. When not set, the tables use Snowflake-managed storage. Grant `USAGE` on the volume to `APPLICATION SNOWFLAKE` first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#external_volume PostgresMirror#external_volume}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#id PostgresMirror#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `postgres_schemas`<sup>Optional</sup> <a name="postgres_schemas" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.postgresSchemas"></a>

```python
postgres_schemas: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the source schemas to mirror.

Every current and future table in them is included. Schema names are literal and case-sensitive, written without Postgres quoting, such as `MixedCase` rather than `"MixedCase"`. Schemas are added and removed in place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#postgres_schemas PostgresMirror#postgres_schemas}

---

##### `postgres_tables`<sup>Optional</sup> <a name="postgres_tables" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.postgresTables"></a>

```python
postgres_tables: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the source tables to mirror, as schema-qualified names (`schema.table`) written the way `DESCRIBE_MIRROR` returns them: unquoted and lowercase, except for parts Postgres requires to be quoted, such as `public."MixedCase"`. Other spellings of the same table show as a change on every plan. Tables are added and removed in place, without copying the other tables again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#postgres_tables PostgresMirror#postgres_tables}

---

##### `refresh_interval`<sup>Optional</sup> <a name="refresh_interval" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.refreshInterval"></a>

```python
refresh_interval: PostgresMirrorRefreshInterval
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval">PostgresMirrorRefreshInterval</a>

refresh_interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#refresh_interval PostgresMirror#refresh_interval}

---

##### `target_table_type`<sup>Optional</sup> <a name="target_table_type" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.targetTableType"></a>

```python
target_table_type: str
```

- *Type:* str

Specifies the format of the target tables.

When not set, Snowflake uses `SNOWFLAKE`. Valid values are (case-insensitive): `SNOWFLAKE` | `ICEBERG`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#target_table_type PostgresMirror#target_table_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.timeouts"></a>

```python
timeouts: PostgresMirrorTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts">PostgresMirrorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#timeouts PostgresMirror#timeouts}

---

##### `warehouse`<sup>Optional</sup> <a name="warehouse" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.warehouse"></a>

```python
warehouse: str
```

- *Type:* str

Specifies the warehouse the mirror's apply task runs on.

When not set, the task runs on serverless compute. Snowflake uppercases the name, so the warehouse itself must have an uppercase name; the case used in the configuration does not matter. Grant `USAGE` on the warehouse to `APPLICATION SNOWFLAKE` first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#warehouse PostgresMirror#warehouse}

---

### PostgresMirrorDescribeOutput <a name="PostgresMirrorDescribeOutput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import postgres_mirror

postgresMirror.PostgresMirrorDescribeOutput()
```


### PostgresMirrorRefreshInterval <a name="PostgresMirrorRefreshInterval" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval.Initializer"></a>

```python
from cdktn_provider_snowflake import postgres_mirror

postgresMirror.PostgresMirrorRefreshInterval(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None,
  seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | Specifies the refresh interval in hours. (conflicts with `minutes` and `seconds`). |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | Specifies the refresh interval in minutes. (conflicts with `hours` and `seconds`). |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | Specifies the refresh interval in seconds. (conflicts with `hours` and `minutes`). |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the refresh interval in hours. (conflicts with `minutes` and `seconds`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#hours PostgresMirror#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the refresh interval in minutes. (conflicts with `hours` and `seconds`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#minutes PostgresMirror#minutes}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the refresh interval in seconds. (conflicts with `hours` and `minutes`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#seconds PostgresMirror#seconds}

---

### PostgresMirrorTimeouts <a name="PostgresMirrorTimeouts" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import postgres_mirror

postgresMirror.PostgresMirrorTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#create PostgresMirror#create}. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#delete PostgresMirror#delete}. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#read PostgresMirror#read}. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#update PostgresMirror#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#create PostgresMirror#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#delete PostgresMirror#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#read PostgresMirror#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#update PostgresMirror#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PostgresMirrorDescribeOutputList <a name="PostgresMirrorDescribeOutputList" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import postgres_mirror

postgresMirror.PostgresMirrorDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PostgresMirrorDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### PostgresMirrorDescribeOutputOutputReference <a name="PostgresMirrorDescribeOutputOutputReference" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import postgres_mirror

postgresMirror.PostgresMirrorDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.applyLagBytes">apply_lag_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.applyLagOperations">apply_lag_operations</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.applyLagSeconds">apply_lag_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.catalogIntegrationName">catalog_integration_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.externalVolume">external_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.feedOnly">feed_only</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastAppliedCommitLsn">last_applied_commit_lsn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastAppliedCommitTime">last_applied_commit_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastApplyTime">last_apply_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastOperationId">last_operation_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastOperationTime">last_operation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresDatabase">postgres_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresInstance">postgres_instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresSchemas">postgres_schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresStatus">postgres_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresTables">postgres_tables</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.recentQueryDurations">recent_query_durations</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.refreshInterval">refresh_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.targetDatabase">target_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.targetTableType">target_table_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.warehouse">warehouse</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutput">PostgresMirrorDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apply_lag_bytes`<sup>Required</sup> <a name="apply_lag_bytes" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.applyLagBytes"></a>

```python
apply_lag_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `apply_lag_operations`<sup>Required</sup> <a name="apply_lag_operations" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.applyLagOperations"></a>

```python
apply_lag_operations: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `apply_lag_seconds`<sup>Required</sup> <a name="apply_lag_seconds" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.applyLagSeconds"></a>

```python
apply_lag_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `catalog_integration_name`<sup>Required</sup> <a name="catalog_integration_name" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.catalogIntegrationName"></a>

```python
catalog_integration_name: str
```

- *Type:* str

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `external_volume`<sup>Required</sup> <a name="external_volume" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.externalVolume"></a>

```python
external_volume: str
```

- *Type:* str

---

##### `feed_only`<sup>Required</sup> <a name="feed_only" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.feedOnly"></a>

```python
feed_only: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `last_applied_commit_lsn`<sup>Required</sup> <a name="last_applied_commit_lsn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastAppliedCommitLsn"></a>

```python
last_applied_commit_lsn: str
```

- *Type:* str

---

##### `last_applied_commit_time`<sup>Required</sup> <a name="last_applied_commit_time" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastAppliedCommitTime"></a>

```python
last_applied_commit_time: str
```

- *Type:* str

---

##### `last_apply_time`<sup>Required</sup> <a name="last_apply_time" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastApplyTime"></a>

```python
last_apply_time: str
```

- *Type:* str

---

##### `last_operation_id`<sup>Required</sup> <a name="last_operation_id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastOperationId"></a>

```python
last_operation_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_operation_time`<sup>Required</sup> <a name="last_operation_time" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastOperationTime"></a>

```python
last_operation_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `postgres_database`<sup>Required</sup> <a name="postgres_database" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresDatabase"></a>

```python
postgres_database: str
```

- *Type:* str

---

##### `postgres_instance`<sup>Required</sup> <a name="postgres_instance" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresInstance"></a>

```python
postgres_instance: str
```

- *Type:* str

---

##### `postgres_schemas`<sup>Required</sup> <a name="postgres_schemas" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresSchemas"></a>

```python
postgres_schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `postgres_status`<sup>Required</sup> <a name="postgres_status" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresStatus"></a>

```python
postgres_status: str
```

- *Type:* str

---

##### `postgres_tables`<sup>Required</sup> <a name="postgres_tables" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresTables"></a>

```python
postgres_tables: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `recent_query_durations`<sup>Required</sup> <a name="recent_query_durations" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.recentQueryDurations"></a>

```python
recent_query_durations: str
```

- *Type:* str

---

##### `refresh_interval`<sup>Required</sup> <a name="refresh_interval" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.refreshInterval"></a>

```python
refresh_interval: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `target_database`<sup>Required</sup> <a name="target_database" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.targetDatabase"></a>

```python
target_database: str
```

- *Type:* str

---

##### `target_table_type`<sup>Required</sup> <a name="target_table_type" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.targetTableType"></a>

```python
target_table_type: str
```

- *Type:* str

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.warehouse"></a>

```python
warehouse: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: PostgresMirrorDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutput">PostgresMirrorDescribeOutput</a>

---


### PostgresMirrorRefreshIntervalOutputReference <a name="PostgresMirrorRefreshIntervalOutputReference" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import postgres_mirror

postgresMirror.PostgresMirrorRefreshIntervalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resetHours">reset_hours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resetMinutes">reset_minutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resetSeconds">reset_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hours` <a name="reset_hours" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resetHours"></a>

```python
def reset_hours() -> None
```

##### `reset_minutes` <a name="reset_minutes" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resetMinutes"></a>

```python
def reset_minutes() -> None
```

##### `reset_seconds` <a name="reset_seconds" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resetSeconds"></a>

```python
def reset_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.hoursInput">hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.minutesInput">minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.secondsInput">seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval">PostgresMirrorRefreshInterval</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hours_input`<sup>Optional</sup> <a name="hours_input" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.hoursInput"></a>

```python
hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.minutesInput"></a>

```python
minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_input`<sup>Optional</sup> <a name="seconds_input" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.secondsInput"></a>

```python
seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.internalValue"></a>

```python
internal_value: PostgresMirrorRefreshInterval
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval">PostgresMirrorRefreshInterval</a>

---


### PostgresMirrorTimeoutsOutputReference <a name="PostgresMirrorTimeoutsOutputReference" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import postgres_mirror

postgresMirror.PostgresMirrorTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts">PostgresMirrorTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PostgresMirrorTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts">PostgresMirrorTimeouts</a>

---



