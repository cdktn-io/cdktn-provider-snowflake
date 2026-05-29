# `dataSnowflakeCatalogIntegrations` Submodule <a name="`dataSnowflakeCatalogIntegrations` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeCatalogIntegrations <a name="DataSnowflakeCatalogIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/data-sources/catalog_integrations snowflake_catalog_integrations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_catalog_integrations.DataSnowflakeCatalogIntegrations;

DataSnowflakeCatalogIntegrations.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .like(java.lang.String)
//  .withDescribe(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/data-sources/catalog_integrations#id DataSnowflakeCatalogIntegrations#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.like">like</a></code> | <code>java.lang.String</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `true`) Runs DESC CATALOG INTEGRATION for each catalog integration returned by SHOW CATALOG INTEGRATIONS. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/data-sources/catalog_integrations#id DataSnowflakeCatalogIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.like"></a>

- *Type:* java.lang.String

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/data-sources/catalog_integrations#like DataSnowflakeCatalogIntegrations#like}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.withDescribe"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `true`) Runs DESC CATALOG INTEGRATION for each catalog integration returned by SHOW CATALOG INTEGRATIONS.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/data-sources/catalog_integrations#with_describe DataSnowflakeCatalogIntegrations#with_describe}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.resetLike">resetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.resetWithDescribe">resetWithDescribe</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.resetId"></a>

```java
public void resetId()
```

##### `resetLike` <a name="resetLike" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.resetLike"></a>

```java
public void resetLike()
```

##### `resetWithDescribe` <a name="resetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.resetWithDescribe"></a>

```java
public void resetWithDescribe()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeCatalogIntegrations resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_catalog_integrations.DataSnowflakeCatalogIntegrations;

DataSnowflakeCatalogIntegrations.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_catalog_integrations.DataSnowflakeCatalogIntegrations;

DataSnowflakeCatalogIntegrations.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.isTerraformDataSource"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_catalog_integrations.DataSnowflakeCatalogIntegrations;

DataSnowflakeCatalogIntegrations.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_catalog_integrations.DataSnowflakeCatalogIntegrations;

DataSnowflakeCatalogIntegrations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataSnowflakeCatalogIntegrations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataSnowflakeCatalogIntegrations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataSnowflakeCatalogIntegrations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataSnowflakeCatalogIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/data-sources/catalog_integrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeCatalogIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.catalogIntegrations">catalogIntegrations</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.likeInput">likeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.withDescribeInput">withDescribeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.like">like</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `catalogIntegrations`<sup>Required</sup> <a name="catalogIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.catalogIntegrations"></a>

```java
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsList getCatalogIntegrations();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `likeInput`<sup>Optional</sup> <a name="likeInput" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.likeInput"></a>

```java
public java.lang.String getLikeInput();
```

- *Type:* java.lang.String

---

##### `withDescribeInput`<sup>Optional</sup> <a name="withDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.withDescribeInput"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.like"></a>

```java
public java.lang.String getLike();
```

- *Type:* java.lang.String

---

##### `withDescribe`<sup>Required</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.withDescribe"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribe();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeCatalogIntegrationsCatalogIntegrations <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrations.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_catalog_integrations.DataSnowflakeCatalogIntegrationsCatalogIntegrations;

DataSnowflakeCatalogIntegrationsCatalogIntegrations.builder()
    .build();
```


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_catalog_integrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput;

DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput.builder()
    .build();
```


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_catalog_integrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication;

DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication.builder()
    .build();
```


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_catalog_integrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication;

DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication.builder()
    .build();
```


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_catalog_integrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig;

DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig.builder()
    .build();
```


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_catalog_integrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication;

DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication.builder()
    .build();
```


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_catalog_integrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput;

DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput.builder()
    .build();
```


### DataSnowflakeCatalogIntegrationsConfig <a name="DataSnowflakeCatalogIntegrationsConfig" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_catalog_integrations.DataSnowflakeCatalogIntegrationsConfig;

DataSnowflakeCatalogIntegrationsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .like(java.lang.String)
//  .withDescribe(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/data-sources/catalog_integrations#id DataSnowflakeCatalogIntegrations#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.like">like</a></code> | <code>java.lang.String</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `true`) Runs DESC CATALOG INTEGRATION for each catalog integration returned by SHOW CATALOG INTEGRATIONS. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/data-sources/catalog_integrations#id DataSnowflakeCatalogIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.like"></a>

```java
public java.lang.String getLike();
```

- *Type:* java.lang.String

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/data-sources/catalog_integrations#like DataSnowflakeCatalogIntegrations#like}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.withDescribe"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribe();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `true`) Runs DESC CATALOG INTEGRATION for each catalog integration returned by SHOW CATALOG INTEGRATIONS.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/data-sources/catalog_integrations#with_describe DataSnowflakeCatalogIntegrations#with_describe}

---

## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_catalog_integrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.get"></a>

```java
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_catalog_integrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.property.internalValue"></a>

```java
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication</a>

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_catalog_integrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.get"></a>

```java
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_catalog_integrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.get"></a>

```java
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_catalog_integrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.oauthAllowedScopes">oauthAllowedScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.oauthClientId">oauthClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.oauthTokenUri">oauthTokenUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `oauthAllowedScopes`<sup>Required</sup> <a name="oauthAllowedScopes" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.oauthAllowedScopes"></a>

```java
public java.util.List<java.lang.String> getOauthAllowedScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `oauthClientId`<sup>Required</sup> <a name="oauthClientId" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.oauthClientId"></a>

```java
public java.lang.String getOauthClientId();
```

- *Type:* java.lang.String

---

##### `oauthTokenUri`<sup>Required</sup> <a name="oauthTokenUri" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.oauthTokenUri"></a>

```java
public java.lang.String getOauthTokenUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.internalValue"></a>

```java
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication</a>

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_catalog_integrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.bearerRestAuthentication">bearerRestAuthentication</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.catalogNamespace">catalogNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.catalogSource">catalogSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.glueAwsExternalId">glueAwsExternalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.glueAwsIamUserArn">glueAwsIamUserArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.glueAwsRoleArn">glueAwsRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.glueCatalogId">glueCatalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.glueRegion">glueRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.oauthRestAuthentication">oauthRestAuthentication</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.refreshIntervalSeconds">refreshIntervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.restConfig">restConfig</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.sigv4RestAuthentication">sigv4RestAuthentication</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.tableFormat">tableFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bearerRestAuthentication`<sup>Required</sup> <a name="bearerRestAuthentication" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.bearerRestAuthentication"></a>

```java
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList getBearerRestAuthentication();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList</a>

---

##### `catalogNamespace`<sup>Required</sup> <a name="catalogNamespace" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.catalogNamespace"></a>

```java
public java.lang.String getCatalogNamespace();
```

- *Type:* java.lang.String

---

##### `catalogSource`<sup>Required</sup> <a name="catalogSource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.catalogSource"></a>

```java
public java.lang.String getCatalogSource();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `glueAwsExternalId`<sup>Required</sup> <a name="glueAwsExternalId" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.glueAwsExternalId"></a>

```java
public java.lang.String getGlueAwsExternalId();
```

- *Type:* java.lang.String

---

##### `glueAwsIamUserArn`<sup>Required</sup> <a name="glueAwsIamUserArn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.glueAwsIamUserArn"></a>

```java
public java.lang.String getGlueAwsIamUserArn();
```

- *Type:* java.lang.String

---

##### `glueAwsRoleArn`<sup>Required</sup> <a name="glueAwsRoleArn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.glueAwsRoleArn"></a>

```java
public java.lang.String getGlueAwsRoleArn();
```

- *Type:* java.lang.String

---

##### `glueCatalogId`<sup>Required</sup> <a name="glueCatalogId" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.glueCatalogId"></a>

```java
public java.lang.String getGlueCatalogId();
```

- *Type:* java.lang.String

---

##### `glueRegion`<sup>Required</sup> <a name="glueRegion" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.glueRegion"></a>

```java
public java.lang.String getGlueRegion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `oauthRestAuthentication`<sup>Required</sup> <a name="oauthRestAuthentication" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.oauthRestAuthentication"></a>

```java
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList getOauthRestAuthentication();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList</a>

---

##### `refreshIntervalSeconds`<sup>Required</sup> <a name="refreshIntervalSeconds" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.refreshIntervalSeconds"></a>

```java
public java.lang.Number getRefreshIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `restConfig`<sup>Required</sup> <a name="restConfig" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.restConfig"></a>

```java
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList getRestConfig();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList</a>

---

##### `sigv4RestAuthentication`<sup>Required</sup> <a name="sigv4RestAuthentication" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.sigv4RestAuthentication"></a>

```java
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList getSigv4RestAuthentication();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList</a>

---

##### `tableFormat`<sup>Required</sup> <a name="tableFormat" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.tableFormat"></a>

```java
public java.lang.String getTableFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.internalValue"></a>

```java
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput</a>

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_catalog_integrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.get"></a>

```java
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_catalog_integrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.accessDelegationMode">accessDelegationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.catalogApiType">catalogApiType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.catalogUri">catalogUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessDelegationMode`<sup>Required</sup> <a name="accessDelegationMode" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.accessDelegationMode"></a>

```java
public java.lang.String getAccessDelegationMode();
```

- *Type:* java.lang.String

---

##### `catalogApiType`<sup>Required</sup> <a name="catalogApiType" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.catalogApiType"></a>

```java
public java.lang.String getCatalogApiType();
```

- *Type:* java.lang.String

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `catalogUri`<sup>Required</sup> <a name="catalogUri" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.catalogUri"></a>

```java
public java.lang.String getCatalogUri();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.internalValue"></a>

```java
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig</a>

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_catalog_integrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.get"></a>

```java
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_catalog_integrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.property.sigv4IamRole">sigv4IamRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.property.sigv4SigningRegion">sigv4SigningRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sigv4IamRole`<sup>Required</sup> <a name="sigv4IamRole" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.property.sigv4IamRole"></a>

```java
public java.lang.String getSigv4IamRole();
```

- *Type:* java.lang.String

---

##### `sigv4SigningRegion`<sup>Required</sup> <a name="sigv4SigningRegion" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.property.sigv4SigningRegion"></a>

```java
public java.lang.String getSigv4SigningRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.property.internalValue"></a>

```java
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication</a>

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsList <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsList" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_catalog_integrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.get"></a>

```java
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_catalog_integrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrations">DataSnowflakeCatalogIntegrationsCatalogIntegrations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.property.describeOutput"></a>

```java
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.property.showOutput"></a>

```java
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.property.internalValue"></a>

```java
public DataSnowflakeCatalogIntegrationsCatalogIntegrations getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrations">DataSnowflakeCatalogIntegrationsCatalogIntegrations</a>

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_catalog_integrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.get"></a>

```java
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_catalog_integrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput">DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.internalValue"></a>

```java
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput">DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput</a>

---



