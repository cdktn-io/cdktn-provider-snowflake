# `postgresMirror` Submodule <a name="`postgresMirror` Submodule" id="@cdktn/provider-snowflake.postgresMirror"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresMirror <a name="PostgresMirror" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror snowflake_postgres_mirror}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer"></a>

```java
import io.cdktn.providers.snowflake.postgres_mirror.PostgresMirror;

PostgresMirror.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .postgresDatabase(java.lang.String)
    .postgresInstance(java.lang.String)
    .targetDatabase(java.lang.String)
//  .dropTargetDatabaseOnDestroy(java.lang.Boolean|IResolvable)
//  .externalVolume(java.lang.String)
//  .id(java.lang.String)
//  .postgresSchemas(java.util.List<java.lang.String>)
//  .postgresTables(java.util.List<java.lang.String>)
//  .refreshInterval(PostgresMirrorRefreshInterval)
//  .targetTableType(java.lang.String)
//  .timeouts(PostgresMirrorTimeouts)
//  .warehouse(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the name of the mirror. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.postgresDatabase">postgresDatabase</a></code> | <code>java.lang.String</code> | Specifies the source database on the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.postgresInstance">postgresInstance</a></code> | <code>java.lang.String</code> | Specifies the source Postgres instance (case-sensitive). The role used by the provider must own the instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.targetDatabase">targetDatabase</a></code> | <code>java.lang.String</code> | Specifies the Snowflake database the mirror creates and keeps up to date. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.dropTargetDatabaseOnDestroy">dropTargetDatabaseOnDestroy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `true`) Specifies whether destroying the mirror also drops its target database. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.externalVolume">externalVolume</a></code> | <code>java.lang.String</code> | Specifies the external volume for Iceberg target tables. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#id PostgresMirror#id}. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.postgresSchemas">postgresSchemas</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the source schemas to mirror. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.postgresTables">postgresTables</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the source tables to mirror, as schema-qualified names (`schema.table`) written the way `DESCRIBE_MIRROR` returns them: unquoted and lowercase, except for parts Postgres requires to be quoted, such as `public."MixedCase"`. Other spellings of the same table show as a change on every plan. Tables are added and removed in place, without copying the other tables again. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.refreshInterval">refreshInterval</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval">PostgresMirrorRefreshInterval</a></code> | refresh_interval block. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.targetTableType">targetTableType</a></code> | <code>java.lang.String</code> | Specifies the format of the target tables. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts">PostgresMirrorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.warehouse">warehouse</a></code> | <code>java.lang.String</code> | Specifies the warehouse the mirror's apply task runs on. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the name of the mirror.

It must be unique across all Postgres instances in the account. Snowflake stores the name lowercased, and the lowercased name is the resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#name PostgresMirror#name}

---

##### `postgresDatabase`<sup>Required</sup> <a name="postgresDatabase" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.postgresDatabase"></a>

- *Type:* java.lang.String

Specifies the source database on the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#postgres_database PostgresMirror#postgres_database}

---

##### `postgresInstance`<sup>Required</sup> <a name="postgresInstance" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.postgresInstance"></a>

- *Type:* java.lang.String

Specifies the source Postgres instance (case-sensitive). The role used by the provider must own the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#postgres_instance PostgresMirror#postgres_instance}

---

##### `targetDatabase`<sup>Required</sup> <a name="targetDatabase" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.targetDatabase"></a>

- *Type:* java.lang.String

Specifies the Snowflake database the mirror creates and keeps up to date.

The database must not exist yet, and Snowflake uppercases its name. The mirror protects the database, so do not manage it with `snowflake_database`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#target_database PostgresMirror#target_database}

---

##### `dropTargetDatabaseOnDestroy`<sup>Optional</sup> <a name="dropTargetDatabaseOnDestroy" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.dropTargetDatabaseOnDestroy"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `true`) Specifies whether destroying the mirror also drops its target database.

A kept target database can never be the target of a mirror again, so with `false`, a replacement that keeps the same `target_database` fails. A kept target database stays owned by the `SNOWFLAKE` application. To manage or drop it, first transfer its ownership with `GRANT OWNERSHIP ON DATABASE`, which needs the `MANAGE GRANTS` privilege.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#drop_target_database_on_destroy PostgresMirror#drop_target_database_on_destroy}

---

##### `externalVolume`<sup>Optional</sup> <a name="externalVolume" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.externalVolume"></a>

- *Type:* java.lang.String

Specifies the external volume for Iceberg target tables.

Valid only with `target_table_type = "ICEBERG"`. When not set, the tables use Snowflake-managed storage. Grant `USAGE` on the volume to `APPLICATION SNOWFLAKE` first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#external_volume PostgresMirror#external_volume}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#id PostgresMirror#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `postgresSchemas`<sup>Optional</sup> <a name="postgresSchemas" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.postgresSchemas"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the source schemas to mirror.

Every current and future table in them is included. Schema names are literal and case-sensitive, written without Postgres quoting, such as `MixedCase` rather than `"MixedCase"`. Schemas are added and removed in place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#postgres_schemas PostgresMirror#postgres_schemas}

---

##### `postgresTables`<sup>Optional</sup> <a name="postgresTables" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.postgresTables"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the source tables to mirror, as schema-qualified names (`schema.table`) written the way `DESCRIBE_MIRROR` returns them: unquoted and lowercase, except for parts Postgres requires to be quoted, such as `public."MixedCase"`. Other spellings of the same table show as a change on every plan. Tables are added and removed in place, without copying the other tables again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#postgres_tables PostgresMirror#postgres_tables}

---

##### `refreshInterval`<sup>Optional</sup> <a name="refreshInterval" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.refreshInterval"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval">PostgresMirrorRefreshInterval</a>

refresh_interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#refresh_interval PostgresMirror#refresh_interval}

---

##### `targetTableType`<sup>Optional</sup> <a name="targetTableType" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.targetTableType"></a>

- *Type:* java.lang.String

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

- *Type:* java.lang.String

Specifies the warehouse the mirror's apply task runs on.

When not set, the task runs on serverless compute. Snowflake uppercases the name, so the warehouse itself must have an uppercase name; the case used in the configuration does not matter. Grant `USAGE` on the warehouse to `APPLICATION SNOWFLAKE` first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#warehouse PostgresMirror#warehouse}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.putRefreshInterval">putRefreshInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetDropTargetDatabaseOnDestroy">resetDropTargetDatabaseOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetExternalVolume">resetExternalVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetPostgresSchemas">resetPostgresSchemas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetPostgresTables">resetPostgresTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetRefreshInterval">resetRefreshInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetTargetTableType">resetTargetTableType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetWarehouse">resetWarehouse</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRefreshInterval` <a name="putRefreshInterval" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.putRefreshInterval"></a>

```java
public void putRefreshInterval(PostgresMirrorRefreshInterval value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.putRefreshInterval.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval">PostgresMirrorRefreshInterval</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.putTimeouts"></a>

```java
public void putTimeouts(PostgresMirrorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts">PostgresMirrorTimeouts</a>

---

##### `resetDropTargetDatabaseOnDestroy` <a name="resetDropTargetDatabaseOnDestroy" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetDropTargetDatabaseOnDestroy"></a>

```java
public void resetDropTargetDatabaseOnDestroy()
```

##### `resetExternalVolume` <a name="resetExternalVolume" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetExternalVolume"></a>

```java
public void resetExternalVolume()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetId"></a>

```java
public void resetId()
```

##### `resetPostgresSchemas` <a name="resetPostgresSchemas" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetPostgresSchemas"></a>

```java
public void resetPostgresSchemas()
```

##### `resetPostgresTables` <a name="resetPostgresTables" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetPostgresTables"></a>

```java
public void resetPostgresTables()
```

##### `resetRefreshInterval` <a name="resetRefreshInterval" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetRefreshInterval"></a>

```java
public void resetRefreshInterval()
```

##### `resetTargetTableType` <a name="resetTargetTableType" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetTargetTableType"></a>

```java
public void resetTargetTableType()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWarehouse` <a name="resetWarehouse" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetWarehouse"></a>

```java
public void resetWarehouse()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PostgresMirror resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.postgres_mirror.PostgresMirror;

PostgresMirror.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.postgres_mirror.PostgresMirror;

PostgresMirror.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isTerraformResource"></a>

```java
import io.cdktn.providers.snowflake.postgres_mirror.PostgresMirror;

PostgresMirror.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.postgres_mirror.PostgresMirror;

PostgresMirror.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PostgresMirror.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PostgresMirror resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PostgresMirror to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PostgresMirror that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PostgresMirror to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList">PostgresMirrorDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.refreshInterval">refreshInterval</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference">PostgresMirrorRefreshIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference">PostgresMirrorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.dropTargetDatabaseOnDestroyInput">dropTargetDatabaseOnDestroyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.externalVolumeInput">externalVolumeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresDatabaseInput">postgresDatabaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresInstanceInput">postgresInstanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresSchemasInput">postgresSchemasInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresTablesInput">postgresTablesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.refreshIntervalInput">refreshIntervalInput</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval">PostgresMirrorRefreshInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.targetDatabaseInput">targetDatabaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.targetTableTypeInput">targetTableTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts">PostgresMirrorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.warehouseInput">warehouseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.dropTargetDatabaseOnDestroy">dropTargetDatabaseOnDestroy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.externalVolume">externalVolume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresDatabase">postgresDatabase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresInstance">postgresInstance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresSchemas">postgresSchemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresTables">postgresTables</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.targetDatabase">targetDatabase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.targetTableType">targetTableType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.warehouse">warehouse</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.describeOutput"></a>

```java
public PostgresMirrorDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList">PostgresMirrorDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `refreshInterval`<sup>Required</sup> <a name="refreshInterval" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.refreshInterval"></a>

```java
public PostgresMirrorRefreshIntervalOutputReference getRefreshInterval();
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference">PostgresMirrorRefreshIntervalOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.timeouts"></a>

```java
public PostgresMirrorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference">PostgresMirrorTimeoutsOutputReference</a>

---

##### `dropTargetDatabaseOnDestroyInput`<sup>Optional</sup> <a name="dropTargetDatabaseOnDestroyInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.dropTargetDatabaseOnDestroyInput"></a>

```java
public java.lang.Boolean|IResolvable getDropTargetDatabaseOnDestroyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `externalVolumeInput`<sup>Optional</sup> <a name="externalVolumeInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.externalVolumeInput"></a>

```java
public java.lang.String getExternalVolumeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `postgresDatabaseInput`<sup>Optional</sup> <a name="postgresDatabaseInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresDatabaseInput"></a>

```java
public java.lang.String getPostgresDatabaseInput();
```

- *Type:* java.lang.String

---

##### `postgresInstanceInput`<sup>Optional</sup> <a name="postgresInstanceInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresInstanceInput"></a>

```java
public java.lang.String getPostgresInstanceInput();
```

- *Type:* java.lang.String

---

##### `postgresSchemasInput`<sup>Optional</sup> <a name="postgresSchemasInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresSchemasInput"></a>

```java
public java.util.List<java.lang.String> getPostgresSchemasInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `postgresTablesInput`<sup>Optional</sup> <a name="postgresTablesInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresTablesInput"></a>

```java
public java.util.List<java.lang.String> getPostgresTablesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `refreshIntervalInput`<sup>Optional</sup> <a name="refreshIntervalInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.refreshIntervalInput"></a>

```java
public PostgresMirrorRefreshInterval getRefreshIntervalInput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval">PostgresMirrorRefreshInterval</a>

---

##### `targetDatabaseInput`<sup>Optional</sup> <a name="targetDatabaseInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.targetDatabaseInput"></a>

```java
public java.lang.String getTargetDatabaseInput();
```

- *Type:* java.lang.String

---

##### `targetTableTypeInput`<sup>Optional</sup> <a name="targetTableTypeInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.targetTableTypeInput"></a>

```java
public java.lang.String getTargetTableTypeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.timeoutsInput"></a>

```java
public IResolvable|PostgresMirrorTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts">PostgresMirrorTimeouts</a>

---

##### `warehouseInput`<sup>Optional</sup> <a name="warehouseInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.warehouseInput"></a>

```java
public java.lang.String getWarehouseInput();
```

- *Type:* java.lang.String

---

##### `dropTargetDatabaseOnDestroy`<sup>Required</sup> <a name="dropTargetDatabaseOnDestroy" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.dropTargetDatabaseOnDestroy"></a>

```java
public java.lang.Boolean|IResolvable getDropTargetDatabaseOnDestroy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `externalVolume`<sup>Required</sup> <a name="externalVolume" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.externalVolume"></a>

```java
public java.lang.String getExternalVolume();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `postgresDatabase`<sup>Required</sup> <a name="postgresDatabase" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresDatabase"></a>

```java
public java.lang.String getPostgresDatabase();
```

- *Type:* java.lang.String

---

##### `postgresInstance`<sup>Required</sup> <a name="postgresInstance" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresInstance"></a>

```java
public java.lang.String getPostgresInstance();
```

- *Type:* java.lang.String

---

##### `postgresSchemas`<sup>Required</sup> <a name="postgresSchemas" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresSchemas"></a>

```java
public java.util.List<java.lang.String> getPostgresSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `postgresTables`<sup>Required</sup> <a name="postgresTables" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresTables"></a>

```java
public java.util.List<java.lang.String> getPostgresTables();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetDatabase`<sup>Required</sup> <a name="targetDatabase" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.targetDatabase"></a>

```java
public java.lang.String getTargetDatabase();
```

- *Type:* java.lang.String

---

##### `targetTableType`<sup>Required</sup> <a name="targetTableType" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.targetTableType"></a>

```java
public java.lang.String getTargetTableType();
```

- *Type:* java.lang.String

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.warehouse"></a>

```java
public java.lang.String getWarehouse();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresMirrorConfig <a name="PostgresMirrorConfig" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.postgres_mirror.PostgresMirrorConfig;

PostgresMirrorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .postgresDatabase(java.lang.String)
    .postgresInstance(java.lang.String)
    .targetDatabase(java.lang.String)
//  .dropTargetDatabaseOnDestroy(java.lang.Boolean|IResolvable)
//  .externalVolume(java.lang.String)
//  .id(java.lang.String)
//  .postgresSchemas(java.util.List<java.lang.String>)
//  .postgresTables(java.util.List<java.lang.String>)
//  .refreshInterval(PostgresMirrorRefreshInterval)
//  .targetTableType(java.lang.String)
//  .timeouts(PostgresMirrorTimeouts)
//  .warehouse(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the name of the mirror. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.postgresDatabase">postgresDatabase</a></code> | <code>java.lang.String</code> | Specifies the source database on the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.postgresInstance">postgresInstance</a></code> | <code>java.lang.String</code> | Specifies the source Postgres instance (case-sensitive). The role used by the provider must own the instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.targetDatabase">targetDatabase</a></code> | <code>java.lang.String</code> | Specifies the Snowflake database the mirror creates and keeps up to date. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.dropTargetDatabaseOnDestroy">dropTargetDatabaseOnDestroy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `true`) Specifies whether destroying the mirror also drops its target database. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.externalVolume">externalVolume</a></code> | <code>java.lang.String</code> | Specifies the external volume for Iceberg target tables. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#id PostgresMirror#id}. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.postgresSchemas">postgresSchemas</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the source schemas to mirror. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.postgresTables">postgresTables</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the source tables to mirror, as schema-qualified names (`schema.table`) written the way `DESCRIBE_MIRROR` returns them: unquoted and lowercase, except for parts Postgres requires to be quoted, such as `public."MixedCase"`. Other spellings of the same table show as a change on every plan. Tables are added and removed in place, without copying the other tables again. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.refreshInterval">refreshInterval</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval">PostgresMirrorRefreshInterval</a></code> | refresh_interval block. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.targetTableType">targetTableType</a></code> | <code>java.lang.String</code> | Specifies the format of the target tables. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts">PostgresMirrorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.warehouse">warehouse</a></code> | <code>java.lang.String</code> | Specifies the warehouse the mirror's apply task runs on. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the name of the mirror.

It must be unique across all Postgres instances in the account. Snowflake stores the name lowercased, and the lowercased name is the resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#name PostgresMirror#name}

---

##### `postgresDatabase`<sup>Required</sup> <a name="postgresDatabase" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.postgresDatabase"></a>

```java
public java.lang.String getPostgresDatabase();
```

- *Type:* java.lang.String

Specifies the source database on the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#postgres_database PostgresMirror#postgres_database}

---

##### `postgresInstance`<sup>Required</sup> <a name="postgresInstance" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.postgresInstance"></a>

```java
public java.lang.String getPostgresInstance();
```

- *Type:* java.lang.String

Specifies the source Postgres instance (case-sensitive). The role used by the provider must own the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#postgres_instance PostgresMirror#postgres_instance}

---

##### `targetDatabase`<sup>Required</sup> <a name="targetDatabase" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.targetDatabase"></a>

```java
public java.lang.String getTargetDatabase();
```

- *Type:* java.lang.String

Specifies the Snowflake database the mirror creates and keeps up to date.

The database must not exist yet, and Snowflake uppercases its name. The mirror protects the database, so do not manage it with `snowflake_database`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#target_database PostgresMirror#target_database}

---

##### `dropTargetDatabaseOnDestroy`<sup>Optional</sup> <a name="dropTargetDatabaseOnDestroy" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.dropTargetDatabaseOnDestroy"></a>

```java
public java.lang.Boolean|IResolvable getDropTargetDatabaseOnDestroy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `true`) Specifies whether destroying the mirror also drops its target database.

A kept target database can never be the target of a mirror again, so with `false`, a replacement that keeps the same `target_database` fails. A kept target database stays owned by the `SNOWFLAKE` application. To manage or drop it, first transfer its ownership with `GRANT OWNERSHIP ON DATABASE`, which needs the `MANAGE GRANTS` privilege.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#drop_target_database_on_destroy PostgresMirror#drop_target_database_on_destroy}

---

##### `externalVolume`<sup>Optional</sup> <a name="externalVolume" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.externalVolume"></a>

```java
public java.lang.String getExternalVolume();
```

- *Type:* java.lang.String

Specifies the external volume for Iceberg target tables.

Valid only with `target_table_type = "ICEBERG"`. When not set, the tables use Snowflake-managed storage. Grant `USAGE` on the volume to `APPLICATION SNOWFLAKE` first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#external_volume PostgresMirror#external_volume}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#id PostgresMirror#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `postgresSchemas`<sup>Optional</sup> <a name="postgresSchemas" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.postgresSchemas"></a>

```java
public java.util.List<java.lang.String> getPostgresSchemas();
```

- *Type:* java.util.List<java.lang.String>

Specifies the source schemas to mirror.

Every current and future table in them is included. Schema names are literal and case-sensitive, written without Postgres quoting, such as `MixedCase` rather than `"MixedCase"`. Schemas are added and removed in place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#postgres_schemas PostgresMirror#postgres_schemas}

---

##### `postgresTables`<sup>Optional</sup> <a name="postgresTables" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.postgresTables"></a>

```java
public java.util.List<java.lang.String> getPostgresTables();
```

- *Type:* java.util.List<java.lang.String>

Specifies the source tables to mirror, as schema-qualified names (`schema.table`) written the way `DESCRIBE_MIRROR` returns them: unquoted and lowercase, except for parts Postgres requires to be quoted, such as `public."MixedCase"`. Other spellings of the same table show as a change on every plan. Tables are added and removed in place, without copying the other tables again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#postgres_tables PostgresMirror#postgres_tables}

---

##### `refreshInterval`<sup>Optional</sup> <a name="refreshInterval" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.refreshInterval"></a>

```java
public PostgresMirrorRefreshInterval getRefreshInterval();
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval">PostgresMirrorRefreshInterval</a>

refresh_interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#refresh_interval PostgresMirror#refresh_interval}

---

##### `targetTableType`<sup>Optional</sup> <a name="targetTableType" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.targetTableType"></a>

```java
public java.lang.String getTargetTableType();
```

- *Type:* java.lang.String

Specifies the format of the target tables.

When not set, Snowflake uses `SNOWFLAKE`. Valid values are (case-insensitive): `SNOWFLAKE` | `ICEBERG`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#target_table_type PostgresMirror#target_table_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.timeouts"></a>

```java
public PostgresMirrorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts">PostgresMirrorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#timeouts PostgresMirror#timeouts}

---

##### `warehouse`<sup>Optional</sup> <a name="warehouse" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.warehouse"></a>

```java
public java.lang.String getWarehouse();
```

- *Type:* java.lang.String

Specifies the warehouse the mirror's apply task runs on.

When not set, the task runs on serverless compute. Snowflake uppercases the name, so the warehouse itself must have an uppercase name; the case used in the configuration does not matter. Grant `USAGE` on the warehouse to `APPLICATION SNOWFLAKE` first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#warehouse PostgresMirror#warehouse}

---

### PostgresMirrorDescribeOutput <a name="PostgresMirrorDescribeOutput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.postgres_mirror.PostgresMirrorDescribeOutput;

PostgresMirrorDescribeOutput.builder()
    .build();
```


### PostgresMirrorRefreshInterval <a name="PostgresMirrorRefreshInterval" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval.Initializer"></a>

```java
import io.cdktn.providers.snowflake.postgres_mirror.PostgresMirrorRefreshInterval;

PostgresMirrorRefreshInterval.builder()
//  .hours(java.lang.Number)
//  .minutes(java.lang.Number)
//  .seconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval.property.hours">hours</a></code> | <code>java.lang.Number</code> | Specifies the refresh interval in hours. (conflicts with `minutes` and `seconds`). |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | Specifies the refresh interval in minutes. (conflicts with `hours` and `seconds`). |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Specifies the refresh interval in seconds. (conflicts with `hours` and `minutes`). |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

Specifies the refresh interval in hours. (conflicts with `minutes` and `seconds`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#hours PostgresMirror#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

Specifies the refresh interval in minutes. (conflicts with `hours` and `seconds`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#minutes PostgresMirror#minutes}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Specifies the refresh interval in seconds. (conflicts with `hours` and `minutes`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#seconds PostgresMirror#seconds}

---

### PostgresMirrorTimeouts <a name="PostgresMirrorTimeouts" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.Initializer"></a>

```java
import io.cdktn.providers.snowflake.postgres_mirror.PostgresMirrorTimeouts;

PostgresMirrorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#create PostgresMirror#create}. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#delete PostgresMirror#delete}. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#read PostgresMirror#read}. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#update PostgresMirror#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#create PostgresMirror#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#delete PostgresMirror#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#read PostgresMirror#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#update PostgresMirror#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PostgresMirrorDescribeOutputList <a name="PostgresMirrorDescribeOutputList" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.postgres_mirror.PostgresMirrorDescribeOutputList;

new PostgresMirrorDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.get"></a>

```java
public PostgresMirrorDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### PostgresMirrorDescribeOutputOutputReference <a name="PostgresMirrorDescribeOutputOutputReference" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.postgres_mirror.PostgresMirrorDescribeOutputOutputReference;

new PostgresMirrorDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.applyLagBytes">applyLagBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.applyLagOperations">applyLagOperations</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.applyLagSeconds">applyLagSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.catalogIntegrationName">catalogIntegrationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.errorMessage">errorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.externalVolume">externalVolume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.feedOnly">feedOnly</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastAppliedCommitLsn">lastAppliedCommitLsn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastAppliedCommitTime">lastAppliedCommitTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastApplyTime">lastApplyTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastOperationId">lastOperationId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastOperationTime">lastOperationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresDatabase">postgresDatabase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresInstance">postgresInstance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresSchemas">postgresSchemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresStatus">postgresStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresTables">postgresTables</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.recentQueryDurations">recentQueryDurations</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.refreshInterval">refreshInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.targetDatabase">targetDatabase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.targetTableType">targetTableType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.warehouse">warehouse</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutput">PostgresMirrorDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applyLagBytes`<sup>Required</sup> <a name="applyLagBytes" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.applyLagBytes"></a>

```java
public java.lang.Number getApplyLagBytes();
```

- *Type:* java.lang.Number

---

##### `applyLagOperations`<sup>Required</sup> <a name="applyLagOperations" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.applyLagOperations"></a>

```java
public java.lang.Number getApplyLagOperations();
```

- *Type:* java.lang.Number

---

##### `applyLagSeconds`<sup>Required</sup> <a name="applyLagSeconds" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.applyLagSeconds"></a>

```java
public java.lang.Number getApplyLagSeconds();
```

- *Type:* java.lang.Number

---

##### `catalogIntegrationName`<sup>Required</sup> <a name="catalogIntegrationName" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.catalogIntegrationName"></a>

```java
public java.lang.String getCatalogIntegrationName();
```

- *Type:* java.lang.String

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.errorMessage"></a>

```java
public java.lang.String getErrorMessage();
```

- *Type:* java.lang.String

---

##### `externalVolume`<sup>Required</sup> <a name="externalVolume" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.externalVolume"></a>

```java
public java.lang.String getExternalVolume();
```

- *Type:* java.lang.String

---

##### `feedOnly`<sup>Required</sup> <a name="feedOnly" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.feedOnly"></a>

```java
public IResolvable getFeedOnly();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `lastAppliedCommitLsn`<sup>Required</sup> <a name="lastAppliedCommitLsn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastAppliedCommitLsn"></a>

```java
public java.lang.String getLastAppliedCommitLsn();
```

- *Type:* java.lang.String

---

##### `lastAppliedCommitTime`<sup>Required</sup> <a name="lastAppliedCommitTime" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastAppliedCommitTime"></a>

```java
public java.lang.String getLastAppliedCommitTime();
```

- *Type:* java.lang.String

---

##### `lastApplyTime`<sup>Required</sup> <a name="lastApplyTime" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastApplyTime"></a>

```java
public java.lang.String getLastApplyTime();
```

- *Type:* java.lang.String

---

##### `lastOperationId`<sup>Required</sup> <a name="lastOperationId" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastOperationId"></a>

```java
public java.lang.Number getLastOperationId();
```

- *Type:* java.lang.Number

---

##### `lastOperationTime`<sup>Required</sup> <a name="lastOperationTime" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastOperationTime"></a>

```java
public java.lang.String getLastOperationTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `postgresDatabase`<sup>Required</sup> <a name="postgresDatabase" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresDatabase"></a>

```java
public java.lang.String getPostgresDatabase();
```

- *Type:* java.lang.String

---

##### `postgresInstance`<sup>Required</sup> <a name="postgresInstance" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresInstance"></a>

```java
public java.lang.String getPostgresInstance();
```

- *Type:* java.lang.String

---

##### `postgresSchemas`<sup>Required</sup> <a name="postgresSchemas" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresSchemas"></a>

```java
public java.util.List<java.lang.String> getPostgresSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `postgresStatus`<sup>Required</sup> <a name="postgresStatus" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresStatus"></a>

```java
public java.lang.String getPostgresStatus();
```

- *Type:* java.lang.String

---

##### `postgresTables`<sup>Required</sup> <a name="postgresTables" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresTables"></a>

```java
public java.util.List<java.lang.String> getPostgresTables();
```

- *Type:* java.util.List<java.lang.String>

---

##### `recentQueryDurations`<sup>Required</sup> <a name="recentQueryDurations" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.recentQueryDurations"></a>

```java
public java.lang.String getRecentQueryDurations();
```

- *Type:* java.lang.String

---

##### `refreshInterval`<sup>Required</sup> <a name="refreshInterval" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.refreshInterval"></a>

```java
public java.lang.String getRefreshInterval();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `targetDatabase`<sup>Required</sup> <a name="targetDatabase" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.targetDatabase"></a>

```java
public java.lang.String getTargetDatabase();
```

- *Type:* java.lang.String

---

##### `targetTableType`<sup>Required</sup> <a name="targetTableType" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.targetTableType"></a>

```java
public java.lang.String getTargetTableType();
```

- *Type:* java.lang.String

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.warehouse"></a>

```java
public java.lang.String getWarehouse();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.internalValue"></a>

```java
public PostgresMirrorDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutput">PostgresMirrorDescribeOutput</a>

---


### PostgresMirrorRefreshIntervalOutputReference <a name="PostgresMirrorRefreshIntervalOutputReference" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.postgres_mirror.PostgresMirrorRefreshIntervalOutputReference;

new PostgresMirrorRefreshIntervalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resetHours"></a>

```java
public void resetHours()
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resetMinutes"></a>

```java
public void resetMinutes()
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resetSeconds"></a>

```java
public void resetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval">PostgresMirrorRefreshInterval</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.hoursInput"></a>

```java
public java.lang.Number getHoursInput();
```

- *Type:* java.lang.Number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.minutesInput"></a>

```java
public java.lang.Number getMinutesInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.internalValue"></a>

```java
public PostgresMirrorRefreshInterval getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval">PostgresMirrorRefreshInterval</a>

---


### PostgresMirrorTimeoutsOutputReference <a name="PostgresMirrorTimeoutsOutputReference" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.postgres_mirror.PostgresMirrorTimeoutsOutputReference;

new PostgresMirrorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts">PostgresMirrorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|PostgresMirrorTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts">PostgresMirrorTimeouts</a>

---



