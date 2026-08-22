# `hybridTable` Submodule <a name="`hybridTable` Submodule" id="@cdktn/provider-snowflake.hybridTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HybridTable <a name="HybridTable" id="@cdktn/provider-snowflake.hybridTable.HybridTable"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table snowflake_hybrid_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTable;

HybridTable.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .column(IResolvable|java.util.List<HybridTableColumn>)
    .database(java.lang.String)
    .name(java.lang.String)
    .primaryKeyConstraint(HybridTablePrimaryKeyConstraint)
    .schema(java.lang.String)
//  .comment(java.lang.String)
//  .dataRetentionTimeInDays(java.lang.Number)
//  .foreignKeyConstraint(IResolvable|java.util.List<HybridTableForeignKeyConstraint>)
//  .id(java.lang.String)
//  .index(IResolvable|java.util.List<HybridTableIndex>)
//  .maxDataExtensionTimeInDays(java.lang.Number)
//  .timeouts(HybridTableTimeouts)
//  .uniqueConstraint(IResolvable|java.util.List<HybridTableUniqueConstraint>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.column">column</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>></code> | column block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the hybrid table. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the hybrid table. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.primaryKeyConstraint">primaryKeyConstraint</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint">HybridTablePrimaryKeyConstraint</a></code> | primary_key_constraint block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the hybrid table. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the hybrid table. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code>java.lang.Number</code> | Specifies the retention period for the hybrid table so that Time Travel actions can be performed on historical data. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.foreignKeyConstraint">foreignKeyConstraint</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>></code> | foreign_key_constraint block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#id HybridTable#id}. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.index">index</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>></code> | index block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.maxDataExtensionTimeInDays">maxDataExtensionTimeInDays</a></code> | <code>java.lang.Number</code> | Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for the hybrid table to prevent streams on it from becoming stale. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts">HybridTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.uniqueConstraint">uniqueConstraint</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>></code> | unique_constraint block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.column"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>>

column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#column HybridTable#column}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The database in which to create the hybrid table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#database HybridTable#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier for the hybrid table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#name HybridTable#name}

---

##### `primaryKeyConstraint`<sup>Required</sup> <a name="primaryKeyConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.primaryKeyConstraint"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint">HybridTablePrimaryKeyConstraint</a>

primary_key_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#primary_key_constraint HybridTable#primary_key_constraint}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

The schema in which to create the hybrid table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#schema HybridTable#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the hybrid table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#comment HybridTable#comment}

---

##### `dataRetentionTimeInDays`<sup>Optional</sup> <a name="dataRetentionTimeInDays" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.dataRetentionTimeInDays"></a>

- *Type:* java.lang.Number

Specifies the retention period for the hybrid table so that Time Travel actions can be performed on historical data.

For more information, check [DATA_RETENTION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#data-retention-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#data_retention_time_in_days HybridTable#data_retention_time_in_days}

---

##### `foreignKeyConstraint`<sup>Optional</sup> <a name="foreignKeyConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.foreignKeyConstraint"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>>

foreign_key_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#foreign_key_constraint HybridTable#foreign_key_constraint}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#id HybridTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.index"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>>

index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#index HybridTable#index}

---

##### `maxDataExtensionTimeInDays`<sup>Optional</sup> <a name="maxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.maxDataExtensionTimeInDays"></a>

- *Type:* java.lang.Number

Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for the hybrid table to prevent streams on it from becoming stale.

For more information, check [MAX_DATA_EXTENSION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#max-data-extension-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#max_data_extension_time_in_days HybridTable#max_data_extension_time_in_days}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts">HybridTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#timeouts HybridTable#timeouts}

---

##### `uniqueConstraint`<sup>Optional</sup> <a name="uniqueConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.uniqueConstraint"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>>

unique_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#unique_constraint HybridTable#unique_constraint}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.putColumn">putColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.putForeignKeyConstraint">putForeignKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.putIndex">putIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.putPrimaryKeyConstraint">putPrimaryKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.putUniqueConstraint">putUniqueConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetDataRetentionTimeInDays">resetDataRetentionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetForeignKeyConstraint">resetForeignKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetIndex">resetIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetMaxDataExtensionTimeInDays">resetMaxDataExtensionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetUniqueConstraint">resetUniqueConstraint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTable.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.hybridTable.HybridTable.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.hybridTable.HybridTable.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.hybridTable.HybridTable.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.hybridTable.HybridTable.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.hybridTable.HybridTable.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.hybridTable.HybridTable.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.hybridTable.HybridTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.hybridTable.HybridTable.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.hybridTable.HybridTable.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.hybridTable.HybridTable.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.hybridTable.HybridTable.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.hybridTable.HybridTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.hybridTable.HybridTable.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.hybridTable.HybridTable.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.hybridTable.HybridTable.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.hybridTable.HybridTable.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.hybridTable.HybridTable.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.hybridTable.HybridTable.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.hybridTable.HybridTable.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.hybridTable.HybridTable.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.hybridTable.HybridTable.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.hybridTable.HybridTable.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.hybridTable.HybridTable.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putColumn` <a name="putColumn" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putColumn"></a>

```java
public void putColumn(IResolvable|java.util.List<HybridTableColumn> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putColumn.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>>

---

##### `putForeignKeyConstraint` <a name="putForeignKeyConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putForeignKeyConstraint"></a>

```java
public void putForeignKeyConstraint(IResolvable|java.util.List<HybridTableForeignKeyConstraint> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putForeignKeyConstraint.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>>

---

##### `putIndex` <a name="putIndex" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putIndex"></a>

```java
public void putIndex(IResolvable|java.util.List<HybridTableIndex> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putIndex.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>>

---

##### `putPrimaryKeyConstraint` <a name="putPrimaryKeyConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putPrimaryKeyConstraint"></a>

```java
public void putPrimaryKeyConstraint(HybridTablePrimaryKeyConstraint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putPrimaryKeyConstraint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint">HybridTablePrimaryKeyConstraint</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putTimeouts"></a>

```java
public void putTimeouts(HybridTableTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts">HybridTableTimeouts</a>

---

##### `putUniqueConstraint` <a name="putUniqueConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putUniqueConstraint"></a>

```java
public void putUniqueConstraint(IResolvable|java.util.List<HybridTableUniqueConstraint> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putUniqueConstraint.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetComment"></a>

```java
public void resetComment()
```

##### `resetDataRetentionTimeInDays` <a name="resetDataRetentionTimeInDays" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetDataRetentionTimeInDays"></a>

```java
public void resetDataRetentionTimeInDays()
```

##### `resetForeignKeyConstraint` <a name="resetForeignKeyConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetForeignKeyConstraint"></a>

```java
public void resetForeignKeyConstraint()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetId"></a>

```java
public void resetId()
```

##### `resetIndex` <a name="resetIndex" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetIndex"></a>

```java
public void resetIndex()
```

##### `resetMaxDataExtensionTimeInDays` <a name="resetMaxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetMaxDataExtensionTimeInDays"></a>

```java
public void resetMaxDataExtensionTimeInDays()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUniqueConstraint` <a name="resetUniqueConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetUniqueConstraint"></a>

```java
public void resetUniqueConstraint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a HybridTable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.hybridTable.HybridTable.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTable;

HybridTable.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.hybridTable.HybridTable.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.hybridTable.HybridTable.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTable;

HybridTable.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.hybridTable.HybridTable.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTable.isTerraformResource"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTable;

HybridTable.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.hybridTable.HybridTable.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.hybridTable.HybridTable.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTable;

HybridTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),HybridTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a HybridTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.hybridTable.HybridTable.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.hybridTable.HybridTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the HybridTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.hybridTable.HybridTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing HybridTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.hybridTable.HybridTable.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the HybridTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.column">column</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList">HybridTableColumnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList">HybridTableDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.foreignKeyConstraint">foreignKeyConstraint</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList">HybridTableForeignKeyConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.index">index</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList">HybridTableIndexList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.primaryKeyConstraint">primaryKeyConstraint</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference">HybridTablePrimaryKeyConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.showKeysOutput">showKeysOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList">HybridTableShowKeysOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList">HybridTableShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference">HybridTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.uniqueConstraint">uniqueConstraint</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList">HybridTableUniqueConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.columnInput">columnInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.dataRetentionTimeInDaysInput">dataRetentionTimeInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.foreignKeyConstraintInput">foreignKeyConstraintInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.indexInput">indexInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.maxDataExtensionTimeInDaysInput">maxDataExtensionTimeInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.primaryKeyConstraintInput">primaryKeyConstraintInput</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint">HybridTablePrimaryKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts">HybridTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.uniqueConstraintInput">uniqueConstraintInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.maxDataExtensionTimeInDays">maxDataExtensionTimeInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.column"></a>

```java
public HybridTableColumnList getColumn();
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList">HybridTableColumnList</a>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.describeOutput"></a>

```java
public HybridTableDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList">HybridTableDescribeOutputList</a>

---

##### `foreignKeyConstraint`<sup>Required</sup> <a name="foreignKeyConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.foreignKeyConstraint"></a>

```java
public HybridTableForeignKeyConstraintList getForeignKeyConstraint();
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList">HybridTableForeignKeyConstraintList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.index"></a>

```java
public HybridTableIndexList getIndex();
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList">HybridTableIndexList</a>

---

##### `primaryKeyConstraint`<sup>Required</sup> <a name="primaryKeyConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.primaryKeyConstraint"></a>

```java
public HybridTablePrimaryKeyConstraintOutputReference getPrimaryKeyConstraint();
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference">HybridTablePrimaryKeyConstraintOutputReference</a>

---

##### `showKeysOutput`<sup>Required</sup> <a name="showKeysOutput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.showKeysOutput"></a>

```java
public HybridTableShowKeysOutputList getShowKeysOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList">HybridTableShowKeysOutputList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.showOutput"></a>

```java
public HybridTableShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList">HybridTableShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.timeouts"></a>

```java
public HybridTableTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference">HybridTableTimeoutsOutputReference</a>

---

##### `uniqueConstraint`<sup>Required</sup> <a name="uniqueConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.uniqueConstraint"></a>

```java
public HybridTableUniqueConstraintList getUniqueConstraint();
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList">HybridTableUniqueConstraintList</a>

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.columnInput"></a>

```java
public IResolvable|java.util.List<HybridTableColumn> getColumnInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `dataRetentionTimeInDaysInput`<sup>Optional</sup> <a name="dataRetentionTimeInDaysInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.dataRetentionTimeInDaysInput"></a>

```java
public java.lang.Number getDataRetentionTimeInDaysInput();
```

- *Type:* java.lang.Number

---

##### `foreignKeyConstraintInput`<sup>Optional</sup> <a name="foreignKeyConstraintInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.foreignKeyConstraintInput"></a>

```java
public IResolvable|java.util.List<HybridTableForeignKeyConstraint> getForeignKeyConstraintInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.indexInput"></a>

```java
public IResolvable|java.util.List<HybridTableIndex> getIndexInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>>

---

##### `maxDataExtensionTimeInDaysInput`<sup>Optional</sup> <a name="maxDataExtensionTimeInDaysInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.maxDataExtensionTimeInDaysInput"></a>

```java
public java.lang.Number getMaxDataExtensionTimeInDaysInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `primaryKeyConstraintInput`<sup>Optional</sup> <a name="primaryKeyConstraintInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.primaryKeyConstraintInput"></a>

```java
public HybridTablePrimaryKeyConstraint getPrimaryKeyConstraintInput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint">HybridTablePrimaryKeyConstraint</a>

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.timeoutsInput"></a>

```java
public IResolvable|HybridTableTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts">HybridTableTimeouts</a>

---

##### `uniqueConstraintInput`<sup>Optional</sup> <a name="uniqueConstraintInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.uniqueConstraintInput"></a>

```java
public IResolvable|java.util.List<HybridTableUniqueConstraint> getUniqueConstraintInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `dataRetentionTimeInDays`<sup>Required</sup> <a name="dataRetentionTimeInDays" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.dataRetentionTimeInDays"></a>

```java
public java.lang.Number getDataRetentionTimeInDays();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxDataExtensionTimeInDays`<sup>Required</sup> <a name="maxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.maxDataExtensionTimeInDays"></a>

```java
public java.lang.Number getMaxDataExtensionTimeInDays();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### HybridTableColumn <a name="HybridTableColumn" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumn.Initializer"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTableColumn;

HybridTableColumn.builder()
    .name(java.lang.String)
    .type(java.lang.String)
//  .collate(java.lang.String)
//  .comment(java.lang.String)
//  .default(HybridTableColumnDefault)
//  .notNull(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.name">name</a></code> | <code>java.lang.String</code> | Column name. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.type">type</a></code> | <code>java.lang.String</code> | Column type. See [Snowflake data types](https://docs.snowflake.com/en/sql-reference-data-types) for supported values. Example: VARCHAR(256), NUMBER(38,0). |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.collate">collate</a></code> | <code>java.lang.String</code> | Column collation specification, e.g. en-ci. Case-insensitive (en-ci and EN-CI are treated as equal). |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.comment">comment</a></code> | <code>java.lang.String</code> | Column-level comment. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.default">default</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault">HybridTableColumnDefault</a></code> | default block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.notNull">notNull</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to restrict the column to NOT NULL values. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Column name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#name HybridTable#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Column type. See [Snowflake data types](https://docs.snowflake.com/en/sql-reference-data-types) for supported values. Example: VARCHAR(256), NUMBER(38,0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#type HybridTable#type}

---

##### `collate`<sup>Optional</sup> <a name="collate" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.collate"></a>

```java
public java.lang.String getCollate();
```

- *Type:* java.lang.String

Column collation specification, e.g. en-ci. Case-insensitive (en-ci and EN-CI are treated as equal).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#collate HybridTable#collate}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Column-level comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#comment HybridTable#comment}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.default"></a>

```java
public HybridTableColumnDefault getDefault();
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault">HybridTableColumnDefault</a>

default block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#default HybridTable#default}

---

##### `notNull`<sup>Optional</sup> <a name="notNull" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.notNull"></a>

```java
public java.lang.Boolean|IResolvable getNotNull();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to restrict the column to NOT NULL values.

Changing this on an existing column forces recreation. Primary key columns must set this to true because NOT NULL is implied by the primary key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#not_null HybridTable#not_null}

---

### HybridTableColumnDefault <a name="HybridTableColumnDefault" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault.Initializer"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTableColumnDefault;

HybridTableColumnDefault.builder()
//  .constant(java.lang.String)
//  .expression(java.lang.String)
//  .sequence(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault.property.constant">constant</a></code> | <code>java.lang.String</code> | A constant default value for the column. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault.property.expression">expression</a></code> | <code>java.lang.String</code> | A SQL expression default value for the column. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault.property.sequence">sequence</a></code> | <code>java.lang.String</code> | The default sequence for the column (uses NEXTVAL). |

---

##### `constant`<sup>Optional</sup> <a name="constant" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault.property.constant"></a>

```java
public java.lang.String getConstant();
```

- *Type:* java.lang.String

A constant default value for the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#constant HybridTable#constant}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

A SQL expression default value for the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#expression HybridTable#expression}

---

##### `sequence`<sup>Optional</sup> <a name="sequence" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault.property.sequence"></a>

```java
public java.lang.String getSequence();
```

- *Type:* java.lang.String

The default sequence for the column (uses NEXTVAL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#sequence HybridTable#sequence}

---

### HybridTableConfig <a name="HybridTableConfig" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTableConfig;

HybridTableConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .column(IResolvable|java.util.List<HybridTableColumn>)
    .database(java.lang.String)
    .name(java.lang.String)
    .primaryKeyConstraint(HybridTablePrimaryKeyConstraint)
    .schema(java.lang.String)
//  .comment(java.lang.String)
//  .dataRetentionTimeInDays(java.lang.Number)
//  .foreignKeyConstraint(IResolvable|java.util.List<HybridTableForeignKeyConstraint>)
//  .id(java.lang.String)
//  .index(IResolvable|java.util.List<HybridTableIndex>)
//  .maxDataExtensionTimeInDays(java.lang.Number)
//  .timeouts(HybridTableTimeouts)
//  .uniqueConstraint(IResolvable|java.util.List<HybridTableUniqueConstraint>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.column">column</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>></code> | column block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the hybrid table. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the hybrid table. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.primaryKeyConstraint">primaryKeyConstraint</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint">HybridTablePrimaryKeyConstraint</a></code> | primary_key_constraint block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the hybrid table. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the hybrid table. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code>java.lang.Number</code> | Specifies the retention period for the hybrid table so that Time Travel actions can be performed on historical data. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.foreignKeyConstraint">foreignKeyConstraint</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>></code> | foreign_key_constraint block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#id HybridTable#id}. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.index">index</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>></code> | index block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.maxDataExtensionTimeInDays">maxDataExtensionTimeInDays</a></code> | <code>java.lang.Number</code> | Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for the hybrid table to prevent streams on it from becoming stale. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts">HybridTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.uniqueConstraint">uniqueConstraint</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>></code> | unique_constraint block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.column"></a>

```java
public IResolvable|java.util.List<HybridTableColumn> getColumn();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>>

column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#column HybridTable#column}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The database in which to create the hybrid table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#database HybridTable#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier for the hybrid table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#name HybridTable#name}

---

##### `primaryKeyConstraint`<sup>Required</sup> <a name="primaryKeyConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.primaryKeyConstraint"></a>

```java
public HybridTablePrimaryKeyConstraint getPrimaryKeyConstraint();
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint">HybridTablePrimaryKeyConstraint</a>

primary_key_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#primary_key_constraint HybridTable#primary_key_constraint}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

The schema in which to create the hybrid table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#schema HybridTable#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the hybrid table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#comment HybridTable#comment}

---

##### `dataRetentionTimeInDays`<sup>Optional</sup> <a name="dataRetentionTimeInDays" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.dataRetentionTimeInDays"></a>

```java
public java.lang.Number getDataRetentionTimeInDays();
```

- *Type:* java.lang.Number

Specifies the retention period for the hybrid table so that Time Travel actions can be performed on historical data.

For more information, check [DATA_RETENTION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#data-retention-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#data_retention_time_in_days HybridTable#data_retention_time_in_days}

---

##### `foreignKeyConstraint`<sup>Optional</sup> <a name="foreignKeyConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.foreignKeyConstraint"></a>

```java
public IResolvable|java.util.List<HybridTableForeignKeyConstraint> getForeignKeyConstraint();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>>

foreign_key_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#foreign_key_constraint HybridTable#foreign_key_constraint}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#id HybridTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.index"></a>

```java
public IResolvable|java.util.List<HybridTableIndex> getIndex();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>>

index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#index HybridTable#index}

---

##### `maxDataExtensionTimeInDays`<sup>Optional</sup> <a name="maxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.maxDataExtensionTimeInDays"></a>

```java
public java.lang.Number getMaxDataExtensionTimeInDays();
```

- *Type:* java.lang.Number

Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for the hybrid table to prevent streams on it from becoming stale.

For more information, check [MAX_DATA_EXTENSION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#max-data-extension-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#max_data_extension_time_in_days HybridTable#max_data_extension_time_in_days}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.timeouts"></a>

```java
public HybridTableTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts">HybridTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#timeouts HybridTable#timeouts}

---

##### `uniqueConstraint`<sup>Optional</sup> <a name="uniqueConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.uniqueConstraint"></a>

```java
public IResolvable|java.util.List<HybridTableUniqueConstraint> getUniqueConstraint();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>>

unique_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#unique_constraint HybridTable#unique_constraint}

---

### HybridTableDescribeOutput <a name="HybridTableDescribeOutput" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTableDescribeOutput;

HybridTableDescribeOutput.builder()
    .build();
```


### HybridTableForeignKeyConstraint <a name="HybridTableForeignKeyConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.Initializer"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTableForeignKeyConstraint;

HybridTableForeignKeyConstraint.builder()
    .columns(java.util.List<java.lang.String>)
    .refColumns(java.util.List<java.lang.String>)
    .tableName(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.property.columns">columns</a></code> | <code>java.util.List<java.lang.String></code> | The local column(s) the foreign key is defined on. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.property.refColumns">refColumns</a></code> | <code>java.util.List<java.lang.String></code> | The column(s) in the referenced table that the foreign key references. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.property.tableName">tableName</a></code> | <code>java.lang.String</code> | The table that the foreign key references. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.property.name">name</a></code> | <code>java.lang.String</code> | Name of the constraint. |

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.property.columns"></a>

```java
public java.util.List<java.lang.String> getColumns();
```

- *Type:* java.util.List<java.lang.String>

The local column(s) the foreign key is defined on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#columns HybridTable#columns}

---

##### `refColumns`<sup>Required</sup> <a name="refColumns" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.property.refColumns"></a>

```java
public java.util.List<java.lang.String> getRefColumns();
```

- *Type:* java.util.List<java.lang.String>

The column(s) in the referenced table that the foreign key references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#ref_columns HybridTable#ref_columns}

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

The table that the foreign key references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#table_name HybridTable#table_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#name HybridTable#name}

---

### HybridTableIndex <a name="HybridTableIndex" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndex"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndex.Initializer"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTableIndex;

HybridTableIndex.builder()
    .columns(java.util.List<java.lang.String>)
    .name(java.lang.String)
//  .includeColumns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex.property.columns">columns</a></code> | <code>java.util.List<java.lang.String></code> | Index key columns, in order. Order is semantically meaningful. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex.property.name">name</a></code> | <code>java.lang.String</code> | Name of the secondary index. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex.property.includeColumns">includeColumns</a></code> | <code>java.util.List<java.lang.String></code> | Columns included in the index payload via INCLUDE (...). Order carries no meaning. |

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndex.property.columns"></a>

```java
public java.util.List<java.lang.String> getColumns();
```

- *Type:* java.util.List<java.lang.String>

Index key columns, in order. Order is semantically meaningful.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#columns HybridTable#columns}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndex.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the secondary index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#name HybridTable#name}

---

##### `includeColumns`<sup>Optional</sup> <a name="includeColumns" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndex.property.includeColumns"></a>

```java
public java.util.List<java.lang.String> getIncludeColumns();
```

- *Type:* java.util.List<java.lang.String>

Columns included in the index payload via INCLUDE (...). Order carries no meaning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#include_columns HybridTable#include_columns}

---

### HybridTablePrimaryKeyConstraint <a name="HybridTablePrimaryKeyConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint.Initializer"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTablePrimaryKeyConstraint;

HybridTablePrimaryKeyConstraint.builder()
    .columns(java.util.List<java.lang.String>)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint.property.columns">columns</a></code> | <code>java.util.List<java.lang.String></code> | The column(s) the constraint applies to. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint.property.name">name</a></code> | <code>java.lang.String</code> | Name of the constraint. |

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint.property.columns"></a>

```java
public java.util.List<java.lang.String> getColumns();
```

- *Type:* java.util.List<java.lang.String>

The column(s) the constraint applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#columns HybridTable#columns}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#name HybridTable#name}

---

### HybridTableShowKeysOutput <a name="HybridTableShowKeysOutput" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTableShowKeysOutput;

HybridTableShowKeysOutput.builder()
    .build();
```


### HybridTableShowOutput <a name="HybridTableShowOutput" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTableShowOutput;

HybridTableShowOutput.builder()
    .build();
```


### HybridTableTimeouts <a name="HybridTableTimeouts" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.Initializer"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTableTimeouts;

HybridTableTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#create HybridTable#create}. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#delete HybridTable#delete}. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#read HybridTable#read}. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#update HybridTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#create HybridTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#delete HybridTable#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#read HybridTable#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#update HybridTable#update}.

---

### HybridTableUniqueConstraint <a name="HybridTableUniqueConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint.Initializer"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTableUniqueConstraint;

HybridTableUniqueConstraint.builder()
    .columns(java.util.List<java.lang.String>)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint.property.columns">columns</a></code> | <code>java.util.List<java.lang.String></code> | The column(s) the constraint applies to. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint.property.name">name</a></code> | <code>java.lang.String</code> | Name of the constraint. |

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint.property.columns"></a>

```java
public java.util.List<java.lang.String> getColumns();
```

- *Type:* java.util.List<java.lang.String>

The column(s) the constraint applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#columns HybridTable#columns}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#name HybridTable#name}

---

## Classes <a name="Classes" id="Classes"></a>

### HybridTableColumnDefaultOutputReference <a name="HybridTableColumnDefaultOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTableColumnDefaultOutputReference;

new HybridTableColumnDefaultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resetConstant">resetConstant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resetSequence">resetSequence</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConstant` <a name="resetConstant" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resetConstant"></a>

```java
public void resetConstant()
```

##### `resetExpression` <a name="resetExpression" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resetExpression"></a>

```java
public void resetExpression()
```

##### `resetSequence` <a name="resetSequence" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resetSequence"></a>

```java
public void resetSequence()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.constantInput">constantInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.sequenceInput">sequenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.constant">constant</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.sequence">sequence</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault">HybridTableColumnDefault</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `constantInput`<sup>Optional</sup> <a name="constantInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.constantInput"></a>

```java
public java.lang.String getConstantInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `sequenceInput`<sup>Optional</sup> <a name="sequenceInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.sequenceInput"></a>

```java
public java.lang.String getSequenceInput();
```

- *Type:* java.lang.String

---

##### `constant`<sup>Required</sup> <a name="constant" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.constant"></a>

```java
public java.lang.String getConstant();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `sequence`<sup>Required</sup> <a name="sequence" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.sequence"></a>

```java
public java.lang.String getSequence();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.internalValue"></a>

```java
public HybridTableColumnDefault getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault">HybridTableColumnDefault</a>

---


### HybridTableColumnList <a name="HybridTableColumnList" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTableColumnList;

new HybridTableColumnList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.get"></a>

```java
public HybridTableColumnOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.property.internalValue"></a>

```java
public IResolvable|java.util.List<HybridTableColumn> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>>

---


### HybridTableColumnOutputReference <a name="HybridTableColumnOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTableColumnOutputReference;

new HybridTableColumnOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.putDefault">putDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resetCollate">resetCollate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resetNotNull">resetNotNull</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefault` <a name="putDefault" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.putDefault"></a>

```java
public void putDefault(HybridTableColumnDefault value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.putDefault.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault">HybridTableColumnDefault</a>

---

##### `resetCollate` <a name="resetCollate" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resetCollate"></a>

```java
public void resetCollate()
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetDefault` <a name="resetDefault" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetNotNull` <a name="resetNotNull" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resetNotNull"></a>

```java
public void resetNotNull()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.default">default</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference">HybridTableColumnDefaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.collateInput">collateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.defaultInput">defaultInput</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault">HybridTableColumnDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.notNullInput">notNullInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.collate">collate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.notNull">notNull</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.default"></a>

```java
public HybridTableColumnDefaultOutputReference getDefault();
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference">HybridTableColumnDefaultOutputReference</a>

---

##### `collateInput`<sup>Optional</sup> <a name="collateInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.collateInput"></a>

```java
public java.lang.String getCollateInput();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.defaultInput"></a>

```java
public HybridTableColumnDefault getDefaultInput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault">HybridTableColumnDefault</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notNullInput`<sup>Optional</sup> <a name="notNullInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.notNullInput"></a>

```java
public java.lang.Boolean|IResolvable getNotNullInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `collate`<sup>Required</sup> <a name="collate" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.collate"></a>

```java
public java.lang.String getCollate();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `notNull`<sup>Required</sup> <a name="notNull" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.notNull"></a>

```java
public java.lang.Boolean|IResolvable getNotNull();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.internalValue"></a>

```java
public IResolvable|HybridTableColumn getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>

---


### HybridTableDescribeOutputList <a name="HybridTableDescribeOutputList" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTableDescribeOutputList;

new HybridTableDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.get"></a>

```java
public HybridTableDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### HybridTableDescribeOutputOutputReference <a name="HybridTableDescribeOutputOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTableDescribeOutputOutputReference;

new HybridTableDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.check">check</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.collation">collation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.isNullable">isNullable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.primaryKey">primaryKey</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.privacyDomain">privacyDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.schemaEvolutionRecord">schemaEvolutionRecord</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.uniqueKey">uniqueKey</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutput">HybridTableDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `check`<sup>Required</sup> <a name="check" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.check"></a>

```java
public java.lang.String getCheck();
```

- *Type:* java.lang.String

---

##### `collation`<sup>Required</sup> <a name="collation" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.collation"></a>

```java
public java.lang.String getCollation();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `isNullable`<sup>Required</sup> <a name="isNullable" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.isNullable"></a>

```java
public IResolvable getIsNullable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.primaryKey"></a>

```java
public IResolvable getPrimaryKey();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `privacyDomain`<sup>Required</sup> <a name="privacyDomain" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.privacyDomain"></a>

```java
public java.lang.String getPrivacyDomain();
```

- *Type:* java.lang.String

---

##### `schemaEvolutionRecord`<sup>Required</sup> <a name="schemaEvolutionRecord" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.schemaEvolutionRecord"></a>

```java
public java.lang.String getSchemaEvolutionRecord();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `uniqueKey`<sup>Required</sup> <a name="uniqueKey" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.uniqueKey"></a>

```java
public IResolvable getUniqueKey();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.internalValue"></a>

```java
public HybridTableDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutput">HybridTableDescribeOutput</a>

---


### HybridTableForeignKeyConstraintList <a name="HybridTableForeignKeyConstraintList" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTableForeignKeyConstraintList;

new HybridTableForeignKeyConstraintList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.get"></a>

```java
public HybridTableForeignKeyConstraintOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.property.internalValue"></a>

```java
public IResolvable|java.util.List<HybridTableForeignKeyConstraint> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>>

---


### HybridTableForeignKeyConstraintOutputReference <a name="HybridTableForeignKeyConstraintOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTableForeignKeyConstraintOutputReference;

new HybridTableForeignKeyConstraintOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.columnsInput">columnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.refColumnsInput">refColumnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.columns">columns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.refColumns">refColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnsInput`<sup>Optional</sup> <a name="columnsInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.columnsInput"></a>

```java
public java.util.List<java.lang.String> getColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `refColumnsInput`<sup>Optional</sup> <a name="refColumnsInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.refColumnsInput"></a>

```java
public java.util.List<java.lang.String> getRefColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.columns"></a>

```java
public java.util.List<java.lang.String> getColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `refColumns`<sup>Required</sup> <a name="refColumns" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.refColumns"></a>

```java
public java.util.List<java.lang.String> getRefColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.internalValue"></a>

```java
public IResolvable|HybridTableForeignKeyConstraint getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>

---


### HybridTableIndexList <a name="HybridTableIndexList" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTableIndexList;

new HybridTableIndexList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.get"></a>

```java
public HybridTableIndexOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.property.internalValue"></a>

```java
public IResolvable|java.util.List<HybridTableIndex> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>>

---


### HybridTableIndexOutputReference <a name="HybridTableIndexOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTableIndexOutputReference;

new HybridTableIndexOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.resetIncludeColumns">resetIncludeColumns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeColumns` <a name="resetIncludeColumns" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.resetIncludeColumns"></a>

```java
public void resetIncludeColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.columnsInput">columnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.includeColumnsInput">includeColumnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.columns">columns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.includeColumns">includeColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnsInput`<sup>Optional</sup> <a name="columnsInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.columnsInput"></a>

```java
public java.util.List<java.lang.String> getColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeColumnsInput`<sup>Optional</sup> <a name="includeColumnsInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.includeColumnsInput"></a>

```java
public java.util.List<java.lang.String> getIncludeColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.columns"></a>

```java
public java.util.List<java.lang.String> getColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeColumns`<sup>Required</sup> <a name="includeColumns" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.includeColumns"></a>

```java
public java.util.List<java.lang.String> getIncludeColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.internalValue"></a>

```java
public IResolvable|HybridTableIndex getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>

---


### HybridTablePrimaryKeyConstraintOutputReference <a name="HybridTablePrimaryKeyConstraintOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTablePrimaryKeyConstraintOutputReference;

new HybridTablePrimaryKeyConstraintOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.columnsInput">columnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.columns">columns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint">HybridTablePrimaryKeyConstraint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnsInput`<sup>Optional</sup> <a name="columnsInput" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.columnsInput"></a>

```java
public java.util.List<java.lang.String> getColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.columns"></a>

```java
public java.util.List<java.lang.String> getColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.internalValue"></a>

```java
public HybridTablePrimaryKeyConstraint getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint">HybridTablePrimaryKeyConstraint</a>

---


### HybridTableShowKeysOutputList <a name="HybridTableShowKeysOutputList" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTableShowKeysOutputList;

new HybridTableShowKeysOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.get"></a>

```java
public HybridTableShowKeysOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### HybridTableShowKeysOutputOutputReference <a name="HybridTableShowKeysOutputOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTableShowKeysOutputOutputReference;

new HybridTableShowKeysOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.columns">columns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.deleteRule">deleteRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.referencedColumns">referencedColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.referencedTable">referencedTable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.updateRule">updateRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutput">HybridTableShowKeysOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.columns"></a>

```java
public java.util.List<java.lang.String> getColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deleteRule`<sup>Required</sup> <a name="deleteRule" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.deleteRule"></a>

```java
public java.lang.String getDeleteRule();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `referencedColumns`<sup>Required</sup> <a name="referencedColumns" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.referencedColumns"></a>

```java
public java.util.List<java.lang.String> getReferencedColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `referencedTable`<sup>Required</sup> <a name="referencedTable" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.referencedTable"></a>

```java
public java.lang.String getReferencedTable();
```

- *Type:* java.lang.String

---

##### `updateRule`<sup>Required</sup> <a name="updateRule" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.updateRule"></a>

```java
public java.lang.String getUpdateRule();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.internalValue"></a>

```java
public HybridTableShowKeysOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutput">HybridTableShowKeysOutput</a>

---


### HybridTableShowOutputList <a name="HybridTableShowOutputList" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTableShowOutputList;

new HybridTableShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.get"></a>

```java
public HybridTableShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### HybridTableShowOutputOutputReference <a name="HybridTableShowOutputOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTableShowOutputOutputReference;

new HybridTableShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.bytes">bytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.rows">rows</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutput">HybridTableShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bytes`<sup>Required</sup> <a name="bytes" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.bytes"></a>

```java
public java.lang.Number getBytes();
```

- *Type:* java.lang.Number

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.ownerRoleType"></a>

```java
public java.lang.String getOwnerRoleType();
```

- *Type:* java.lang.String

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.rows"></a>

```java
public java.lang.Number getRows();
```

- *Type:* java.lang.Number

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.internalValue"></a>

```java
public HybridTableShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutput">HybridTableShowOutput</a>

---


### HybridTableTimeoutsOutputReference <a name="HybridTableTimeoutsOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTableTimeoutsOutputReference;

new HybridTableTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts">HybridTableTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|HybridTableTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts">HybridTableTimeouts</a>

---


### HybridTableUniqueConstraintList <a name="HybridTableUniqueConstraintList" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTableUniqueConstraintList;

new HybridTableUniqueConstraintList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.get"></a>

```java
public HybridTableUniqueConstraintOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.property.internalValue"></a>

```java
public IResolvable|java.util.List<HybridTableUniqueConstraint> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>>

---


### HybridTableUniqueConstraintOutputReference <a name="HybridTableUniqueConstraintOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.hybrid_table.HybridTableUniqueConstraintOutputReference;

new HybridTableUniqueConstraintOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.columnsInput">columnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.columns">columns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnsInput`<sup>Optional</sup> <a name="columnsInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.columnsInput"></a>

```java
public java.util.List<java.lang.String> getColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.columns"></a>

```java
public java.util.List<java.lang.String> getColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.internalValue"></a>

```java
public IResolvable|HybridTableUniqueConstraint getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>

---



