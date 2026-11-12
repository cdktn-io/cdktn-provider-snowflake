# `dataSnowflakePostgresMirrors` Submodule <a name="`dataSnowflakePostgresMirrors` Submodule" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakePostgresMirrors <a name="DataSnowflakePostgresMirrors" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors snowflake_postgres_mirrors}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_postgres_mirrors.DataSnowflakePostgresMirrors;

DataSnowflakePostgresMirrors.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .postgresInstance(java.lang.String)
//  .withDescribe(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#id DataSnowflakePostgresMirrors#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.postgresInstance">postgresInstance</a></code> | <code>java.lang.String</code> | Lists only the mirrors that replicate from this Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `true`) Runs DESCRIBE_MIRROR for each mirror returned by LIST_MIRRORS. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#id DataSnowflakePostgresMirrors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `postgresInstance`<sup>Optional</sup> <a name="postgresInstance" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.postgresInstance"></a>

- *Type:* java.lang.String

Lists only the mirrors that replicate from this Postgres instance.

The name is case-sensitive. A quoted identifier, such as the instance's `fully_qualified_name`, is also accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#postgres_instance DataSnowflakePostgresMirrors#postgres_instance}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.withDescribe"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `true`) Runs DESCRIBE_MIRROR for each mirror returned by LIST_MIRRORS.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#with_describe DataSnowflakePostgresMirrors#with_describe}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetPostgresInstance">resetPostgresInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetWithDescribe">resetWithDescribe</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetId"></a>

```java
public void resetId()
```

##### `resetPostgresInstance` <a name="resetPostgresInstance" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetPostgresInstance"></a>

```java
public void resetPostgresInstance()
```

##### `resetWithDescribe` <a name="resetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetWithDescribe"></a>

```java
public void resetWithDescribe()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakePostgresMirrors resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_postgres_mirrors.DataSnowflakePostgresMirrors;

DataSnowflakePostgresMirrors.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_postgres_mirrors.DataSnowflakePostgresMirrors;

DataSnowflakePostgresMirrors.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isTerraformDataSource"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_postgres_mirrors.DataSnowflakePostgresMirrors;

DataSnowflakePostgresMirrors.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_postgres_mirrors.DataSnowflakePostgresMirrors;

DataSnowflakePostgresMirrors.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataSnowflakePostgresMirrors.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataSnowflakePostgresMirrors resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataSnowflakePostgresMirrors to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataSnowflakePostgresMirrors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakePostgresMirrors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.postgresMirrors">postgresMirrors</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList">DataSnowflakePostgresMirrorsPostgresMirrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.postgresInstanceInput">postgresInstanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.withDescribeInput">withDescribeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.postgresInstance">postgresInstance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `postgresMirrors`<sup>Required</sup> <a name="postgresMirrors" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.postgresMirrors"></a>

```java
public DataSnowflakePostgresMirrorsPostgresMirrorsList getPostgresMirrors();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList">DataSnowflakePostgresMirrorsPostgresMirrorsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `postgresInstanceInput`<sup>Optional</sup> <a name="postgresInstanceInput" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.postgresInstanceInput"></a>

```java
public java.lang.String getPostgresInstanceInput();
```

- *Type:* java.lang.String

---

##### `withDescribeInput`<sup>Optional</sup> <a name="withDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.withDescribeInput"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `postgresInstance`<sup>Required</sup> <a name="postgresInstance" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.postgresInstance"></a>

```java
public java.lang.String getPostgresInstance();
```

- *Type:* java.lang.String

---

##### `withDescribe`<sup>Required</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.withDescribe"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribe();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakePostgresMirrorsConfig <a name="DataSnowflakePostgresMirrorsConfig" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_postgres_mirrors.DataSnowflakePostgresMirrorsConfig;

DataSnowflakePostgresMirrorsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .postgresInstance(java.lang.String)
//  .withDescribe(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#id DataSnowflakePostgresMirrors#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.postgresInstance">postgresInstance</a></code> | <code>java.lang.String</code> | Lists only the mirrors that replicate from this Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `true`) Runs DESCRIBE_MIRROR for each mirror returned by LIST_MIRRORS. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#id DataSnowflakePostgresMirrors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `postgresInstance`<sup>Optional</sup> <a name="postgresInstance" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.postgresInstance"></a>

```java
public java.lang.String getPostgresInstance();
```

- *Type:* java.lang.String

Lists only the mirrors that replicate from this Postgres instance.

The name is case-sensitive. A quoted identifier, such as the instance's `fully_qualified_name`, is also accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#postgres_instance DataSnowflakePostgresMirrors#postgres_instance}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.withDescribe"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribe();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `true`) Runs DESCRIBE_MIRROR for each mirror returned by LIST_MIRRORS.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#with_describe DataSnowflakePostgresMirrors#with_describe}

---

### DataSnowflakePostgresMirrorsPostgresMirrors <a name="DataSnowflakePostgresMirrorsPostgresMirrors" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrors.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_postgres_mirrors.DataSnowflakePostgresMirrorsPostgresMirrors;

DataSnowflakePostgresMirrorsPostgresMirrors.builder()
    .build();
```


### DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput <a name="DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_postgres_mirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput;

DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput.builder()
    .build();
```


### DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput <a name="DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_postgres_mirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput;

DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList <a name="DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_postgres_mirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList;

new DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.get"></a>

```java
public DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference <a name="DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_postgres_mirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference;

new DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.applyLagBytes">applyLagBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.applyLagOperations">applyLagOperations</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.applyLagSeconds">applyLagSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.catalogIntegrationName">catalogIntegrationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.errorMessage">errorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.externalVolume">externalVolume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.feedOnly">feedOnly</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastAppliedCommitLsn">lastAppliedCommitLsn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastAppliedCommitTime">lastAppliedCommitTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastApplyTime">lastApplyTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastOperationId">lastOperationId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastOperationTime">lastOperationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresDatabase">postgresDatabase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresInstance">postgresInstance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresSchemas">postgresSchemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresStatus">postgresStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresTables">postgresTables</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.recentQueryDurations">recentQueryDurations</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.refreshInterval">refreshInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.targetDatabase">targetDatabase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.targetTableType">targetTableType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.warehouse">warehouse</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput">DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applyLagBytes`<sup>Required</sup> <a name="applyLagBytes" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.applyLagBytes"></a>

```java
public java.lang.Number getApplyLagBytes();
```

- *Type:* java.lang.Number

---

##### `applyLagOperations`<sup>Required</sup> <a name="applyLagOperations" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.applyLagOperations"></a>

```java
public java.lang.Number getApplyLagOperations();
```

- *Type:* java.lang.Number

---

##### `applyLagSeconds`<sup>Required</sup> <a name="applyLagSeconds" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.applyLagSeconds"></a>

```java
public java.lang.Number getApplyLagSeconds();
```

- *Type:* java.lang.Number

---

##### `catalogIntegrationName`<sup>Required</sup> <a name="catalogIntegrationName" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.catalogIntegrationName"></a>

```java
public java.lang.String getCatalogIntegrationName();
```

- *Type:* java.lang.String

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.errorMessage"></a>

```java
public java.lang.String getErrorMessage();
```

- *Type:* java.lang.String

---

##### `externalVolume`<sup>Required</sup> <a name="externalVolume" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.externalVolume"></a>

```java
public java.lang.String getExternalVolume();
```

- *Type:* java.lang.String

---

##### `feedOnly`<sup>Required</sup> <a name="feedOnly" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.feedOnly"></a>

```java
public IResolvable getFeedOnly();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `lastAppliedCommitLsn`<sup>Required</sup> <a name="lastAppliedCommitLsn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastAppliedCommitLsn"></a>

```java
public java.lang.String getLastAppliedCommitLsn();
```

- *Type:* java.lang.String

---

##### `lastAppliedCommitTime`<sup>Required</sup> <a name="lastAppliedCommitTime" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastAppliedCommitTime"></a>

```java
public java.lang.String getLastAppliedCommitTime();
```

- *Type:* java.lang.String

---

##### `lastApplyTime`<sup>Required</sup> <a name="lastApplyTime" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastApplyTime"></a>

```java
public java.lang.String getLastApplyTime();
```

- *Type:* java.lang.String

---

##### `lastOperationId`<sup>Required</sup> <a name="lastOperationId" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastOperationId"></a>

```java
public java.lang.Number getLastOperationId();
```

- *Type:* java.lang.Number

---

##### `lastOperationTime`<sup>Required</sup> <a name="lastOperationTime" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastOperationTime"></a>

```java
public java.lang.String getLastOperationTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `postgresDatabase`<sup>Required</sup> <a name="postgresDatabase" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresDatabase"></a>

```java
public java.lang.String getPostgresDatabase();
```

- *Type:* java.lang.String

---

##### `postgresInstance`<sup>Required</sup> <a name="postgresInstance" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresInstance"></a>

```java
public java.lang.String getPostgresInstance();
```

- *Type:* java.lang.String

---

##### `postgresSchemas`<sup>Required</sup> <a name="postgresSchemas" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresSchemas"></a>

```java
public java.util.List<java.lang.String> getPostgresSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `postgresStatus`<sup>Required</sup> <a name="postgresStatus" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresStatus"></a>

```java
public java.lang.String getPostgresStatus();
```

- *Type:* java.lang.String

---

##### `postgresTables`<sup>Required</sup> <a name="postgresTables" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresTables"></a>

```java
public java.util.List<java.lang.String> getPostgresTables();
```

- *Type:* java.util.List<java.lang.String>

---

##### `recentQueryDurations`<sup>Required</sup> <a name="recentQueryDurations" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.recentQueryDurations"></a>

```java
public java.lang.String getRecentQueryDurations();
```

- *Type:* java.lang.String

---

##### `refreshInterval`<sup>Required</sup> <a name="refreshInterval" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.refreshInterval"></a>

```java
public java.lang.String getRefreshInterval();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `targetDatabase`<sup>Required</sup> <a name="targetDatabase" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.targetDatabase"></a>

```java
public java.lang.String getTargetDatabase();
```

- *Type:* java.lang.String

---

##### `targetTableType`<sup>Required</sup> <a name="targetTableType" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.targetTableType"></a>

```java
public java.lang.String getTargetTableType();
```

- *Type:* java.lang.String

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.warehouse"></a>

```java
public java.lang.String getWarehouse();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.internalValue"></a>

```java
public DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput">DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput</a>

---


### DataSnowflakePostgresMirrorsPostgresMirrorsList <a name="DataSnowflakePostgresMirrorsPostgresMirrorsList" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_postgres_mirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList;

new DataSnowflakePostgresMirrorsPostgresMirrorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.get"></a>

```java
public DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference <a name="DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_postgres_mirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference;

new DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList">DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList">DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrors">DataSnowflakePostgresMirrorsPostgresMirrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.describeOutput"></a>

```java
public DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList">DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.showOutput"></a>

```java
public DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList">DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.internalValue"></a>

```java
public DataSnowflakePostgresMirrorsPostgresMirrors getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrors">DataSnowflakePostgresMirrorsPostgresMirrors</a>

---


### DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList <a name="DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_postgres_mirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList;

new DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.get"></a>

```java
public DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference <a name="DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_postgres_mirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference;

new DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.errorMessage">errorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.initialSnapshotTablesRemaining">initialSnapshotTablesRemaining</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.lastApplyTime">lastApplyTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.lastOperationTime">lastOperationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.postgresDatabase">postgresDatabase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.postgresInstance">postgresInstance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.refreshInterval">refreshInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.tableCount">tableCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.targetDatabase">targetDatabase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput">DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.errorMessage"></a>

```java
public java.lang.String getErrorMessage();
```

- *Type:* java.lang.String

---

##### `initialSnapshotTablesRemaining`<sup>Required</sup> <a name="initialSnapshotTablesRemaining" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.initialSnapshotTablesRemaining"></a>

```java
public java.lang.Number getInitialSnapshotTablesRemaining();
```

- *Type:* java.lang.Number

---

##### `lastApplyTime`<sup>Required</sup> <a name="lastApplyTime" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.lastApplyTime"></a>

```java
public java.lang.String getLastApplyTime();
```

- *Type:* java.lang.String

---

##### `lastOperationTime`<sup>Required</sup> <a name="lastOperationTime" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.lastOperationTime"></a>

```java
public java.lang.String getLastOperationTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `postgresDatabase`<sup>Required</sup> <a name="postgresDatabase" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.postgresDatabase"></a>

```java
public java.lang.String getPostgresDatabase();
```

- *Type:* java.lang.String

---

##### `postgresInstance`<sup>Required</sup> <a name="postgresInstance" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.postgresInstance"></a>

```java
public java.lang.String getPostgresInstance();
```

- *Type:* java.lang.String

---

##### `refreshInterval`<sup>Required</sup> <a name="refreshInterval" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.refreshInterval"></a>

```java
public java.lang.String getRefreshInterval();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tableCount`<sup>Required</sup> <a name="tableCount" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.tableCount"></a>

```java
public java.lang.Number getTableCount();
```

- *Type:* java.lang.Number

---

##### `targetDatabase`<sup>Required</sup> <a name="targetDatabase" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.targetDatabase"></a>

```java
public java.lang.String getTargetDatabase();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.internalValue"></a>

```java
public DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput">DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput</a>

---



